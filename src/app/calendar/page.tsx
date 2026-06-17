"use client";

import { useAuth } from "@/hooks/use-auth";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ThemeToggle } from "@/components/theme-toggle";
import { BottomNav } from "@/components/bottom-nav";
import Link from "next/link";
import { Zap, Calendar as CalendarIcon, LogOut, ArrowLeft, ChevronLeft, ChevronRight, BookOpen, MessageSquare, BarChart3 } from "lucide-react";
import { useState } from "react";

const weekDays = ["日", "月", "火", "水", "木", "金", "土"];

const sampleActivities: Record<string, { type: string; label: string; color: string }[]> = {
  "15": [{ type: "roleplay", label: "AIロープレ", color: "bg-violet-500" }],
  "17": [
    { type: "skill", label: "スキルカード", color: "bg-blue-500" },
    { type: "diagnosis", label: "スキル診断", color: "bg-emerald-500" },
  ],
  "20": [{ type: "roleplay", label: "AIロープレ", color: "bg-violet-500" }],
};

export default function CalendarPage() {
  const { isLoading: authLoading, logout } = useAuth();
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 5)); // June 2026

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => setCurrentMonth(new Date(year, month - 1));
  const nextMonth = () => setCurrentMonth(new Date(year, month + 1));

  const monthName = `${year}年${month + 1}月`;

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background p-4 pb-20">
        <div className="max-w-lg mx-auto space-y-4">
          <Skeleton className="h-14 w-full rounded-md" />
          <Skeleton className="h-64 w-full rounded-md" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-lg mx-auto px-4 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
              <CalendarIcon className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
            <span className="font-bold text-base">学習カレンダー</span>
          </div>
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <Button size="icon" variant="ghost" onClick={() => logout()}>
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-5 space-y-5">
        <Card className="p-4">
          <div className="flex items-center justify-between mb-4">
            <Button variant="ghost" size="icon" onClick={prevMonth}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <h2 className="font-semibold text-sm">{monthName}</h2>
            <Button variant="ghost" size="icon" onClick={nextMonth}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-2">
            {weekDays.map((day) => (
              <div key={day} className="text-center text-xs text-muted-foreground py-1">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} className="aspect-square" />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = (i + 1).toString();
              const activities = sampleActivities[day];
              const hasActivity = !!activities;
              return (
                <div
                  key={day}
                  className={`aspect-square p-1 rounded-md relative ${
                    hasActivity ? "bg-muted/30" : ""
                  }`}
                >
                  <span className={`text-xs ${hasActivity ? "font-medium" : "text-muted-foreground"}`}>
                    {day}
                  </span>
                  {activities && (
                    <div className="absolute bottom-1 left-1 right-1 flex gap-0.5 justify-center">
                      {activities.map((a, idx) => (
                        <div
                          key={idx}
                          className={`w-1.5 h-1.5 rounded-full ${a.color}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Card>

        <Card className="p-4">
          <h2 className="font-semibold text-sm mb-3">今月のアクティビティ</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-2 rounded-md bg-muted/30">
              <div className="w-8 h-8 rounded-md bg-violet-500/10 flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-violet-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium">AIロープレ練習</p>
                <p className="text-[10px] text-muted-foreground">6月20日</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-md bg-muted/30">
              <div className="w-8 h-8 rounded-md bg-emerald-500/10 flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-emerald-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium">スキル診断</p>
                <p className="text-[10px] text-muted-foreground">6月17日</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-md bg-muted/30">
              <div className="w-8 h-8 rounded-md bg-blue-500/10 flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-blue-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium">スキルカード学習</p>
                <p className="text-[10px] text-muted-foreground">6月17日</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-md bg-muted/30">
              <div className="w-8 h-8 rounded-md bg-violet-500/10 flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-violet-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium">AIロープレ練習</p>
                <p className="text-[10px] text-muted-foreground">6月15日</p>
              </div>
            </div>
          </div>
        </Card>

        <div className="flex items-center gap-4 text-xs text-muted-foreground justify-center">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            スキルカード
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-violet-500" />
            AIロープレ
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            スキル診断
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}