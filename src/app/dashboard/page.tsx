"use client";

import { useAuth } from "@/hooks/use-auth";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { ThemeToggle } from "@/components/theme-toggle";
import { BottomNav } from "@/components/bottom-nav";
import Link from "next/link";
import {
  Zap,
  TrendingUp,
  BookOpen,
  MessageSquare,
  BarChart3,
  ArrowRight,
  LogOut,
  Calendar as CalendarIcon,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  Building2,
  Settings,
  Users,
  ClipboardList,
} from "lucide-react";

export default function Dashboard() {
  const { user, isLoading: authLoading, logout } = useAuth();

  const skillAxes = [
    { label: "傾聴力", key: "listening" as const, color: "bg-blue-500" },
    { label: "質問力", key: "questioning" as const, color: "bg-violet-500" },
    { label: "共感力", key: "empathy" as const, color: "bg-emerald-500" },
    { label: "クロージング力", key: "closing" as const, color: "bg-amber-500" },
  ];

  const quickActions = [
    { icon: BookOpen, label: "スキルカード", path: "/skills", color: "text-blue-500", bg: "bg-blue-500/10" },
    { icon: MessageSquare, label: "AIロープレ", path: "/roleplay", color: "text-violet-500", bg: "bg-violet-500/10" },
    { icon: BarChart3, label: "スキル診断", path: "/diagnosis", color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { icon: CalendarIcon, label: "学習カレンダー", path: "/calendar", color: "text-amber-500", bg: "bg-amber-500/10" },
  ];

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background p-4 pb-20">
        <div className="max-w-lg mx-auto space-y-4">
          <Skeleton className="h-14 w-full rounded-md" />
          <Skeleton className="h-40 w-full rounded-md" />
          <Skeleton className="h-32 w-full rounded-md" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-lg mx-auto px-4 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
            <span className="font-bold text-base">DealCoach</span>
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
        <div className="flex items-center gap-3">
          <Link href="/profile">
            <Avatar
              className="w-12 h-12 cursor-pointer"
              src={user?.user_metadata?.avatar_url || null}
              fallback={
                (user?.user_metadata?.full_name || user?.email)?.[0]?.toUpperCase() || "U"
              }
            />
          </Link>
          <div className="flex-1 min-w-0">
            <h1 className="font-semibold text-base truncate">
              {user?.user_metadata?.full_name
                ? `${user.user_metadata.full_name}さん`
                : "こんにちは"}
            </h1>
            <Link href="/pricing">
              <p className="text-xs text-muted-foreground">
                Freeプラン <ChevronRight className="w-3 h-3 inline" />
              </p>
            </Link>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary">
            <TrendingUp className="w-3.5 h-3.5" />
            <span className="text-xs font-semibold">0</span>
          </div>
        </div>

        <Card className="p-4">
          <div className="flex items-center justify-between gap-4 mb-4">
            <h2 className="font-semibold text-sm">スキルスコア</h2>
            <Link href="/diagnosis">
              <Button variant="ghost" size="sm" className="text-xs gap-1">
                詳細 <ArrowRight className="w-3 h-3" />
              </Button>
            </Link>
          </div>
          <div className="space-y-3">
            {skillAxes.map((axis) => (
              <div key={axis.key} className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{axis.label}</span>
                  <span className="text-xs font-medium">0/100</span>
                </div>
                <Progress value={0} className="h-2" />
              </div>
            ))}
          </div>
        </Card>

        <div className="grid grid-cols-4 gap-2">
          {quickActions.map((action) => (
            <Link key={action.path} href={action.path}>
              <Card className="p-3 hover-elevate flex flex-col items-center gap-2">
                <div className={`w-9 h-9 rounded-md ${action.bg} flex items-center justify-center`}>
                  <action.icon className={`w-4 h-4 ${action.color}`} />
                </div>
                <span className="text-[10px] font-medium text-center leading-tight">{action.label}</span>
              </Card>
            </Link>
          ))}
        </div>

        <Card className="p-4">
          <h2 className="font-semibold text-sm mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            おすすめスキルカード
          </h2>
          <div className="p-3 rounded-md bg-muted/50 text-sm">
            <p className="text-muted-foreground leading-relaxed">
              まずはAIロープレを試して、あなたの営業力を可視化しましょう。AIが最適な学習プランを提案します。
            </p>
          </div>
        </Card>

        <Card className="p-4">
          <h2 className="font-semibold text-sm mb-3 flex items-center gap-2">
            <CalendarIcon className="w-4 h-4 text-muted-foreground" />
            最近のアクティビティ
          </h2>
          <p className="text-sm text-muted-foreground text-center py-4">
            まだアクティビティがありません
          </p>
        </Card>
      </main>

      <BottomNav />
    </div>
  );
}