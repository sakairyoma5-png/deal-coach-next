"use client";

import { useAuth } from "@/hooks/use-auth";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ThemeToggle } from "@/components/theme-toggle";
import { BottomNav } from "@/components/bottom-nav";
import Link from "next/link";
import { Zap, BarChart3, LogOut, ArrowLeft, TrendingUp, Target, RefreshCcw } from "lucide-react";

const skillAxes = [
  { label: "傾聴力", key: "listening", value: 0, color: "bg-blue-500", textColor: "text-blue-500" },
  { label: "質問力", key: "questioning", value: 0, color: "bg-violet-500", textColor: "text-violet-500" },
  { label: "共感力", key: "empathy", value: 0, color: "bg-emerald-500", textColor: "text-emerald-500" },
  { label: "クロージング力", key: "closing", value: 0, color: "bg-amber-500", textColor: "text-amber-500" },
];

export default function DiagnosisPage() {
  const { isLoading: authLoading, logout } = useAuth();

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background p-4 pb-20">
        <div className="max-w-lg mx-auto space-y-4">
          <Skeleton className="h-14 w-full rounded-md" />
          <Skeleton className="h-40 w-full rounded-md" />
          <Skeleton className="h-24 w-full rounded-md" />
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
              <BarChart3 className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
            <span className="font-bold text-base">スキル診断</span>
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
        <Card className="p-6 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Target className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-semibold text-lg mb-2">まだ診断を受けていません</h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-xs mx-auto">
            AIロープレを練習すると、傾聴力・質問力・共感力・クロージング力の4軸でスキルが診断されます。
          </p>
          <Link href="/roleplay">
            <Button className="gap-2">
              AIロープレを始める
              <TrendingUp className="w-4 h-4" />
            </Button>
          </Link>
        </Card>

        <Card className="p-4">
          <h2 className="font-semibold text-sm mb-4 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-muted-foreground" />
            スコア詳細
          </h2>
          <div className="space-y-4">
            {skillAxes.map((axis) => (
              <div key={axis.key} className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium">{axis.label}</span>
                  <span className="text-xs text-muted-foreground">--/100</span>
                </div>
                <Progress value={0} className="h-2.5" />
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-4">
          <h2 className="font-semibold text-sm mb-3 flex items-center gap-2">
            <RefreshCcw className="w-4 h-4 text-muted-foreground" />
            診断履歴
          </h2>
          <p className="text-sm text-muted-foreground text-center py-4">
            診断履歴はまだありません
          </p>
        </Card>
      </main>

      <BottomNav />
    </div>
  );
}