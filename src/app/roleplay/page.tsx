"use client";

import { useAuth } from "@/hooks/use-auth";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ThemeToggle } from "@/components/theme-toggle";
import { BottomNav } from "@/components/bottom-nav";
import Link from "next/link";
import { Zap, MessageSquare, Play, LogOut, ArrowLeft, Bot, Sparkles, Plus } from "lucide-react";

const scenarios = [
  {
    id: 1,
    titleJa: "初回訪問でのアポイント取得",
    difficulty: "easy",
    industry: "IT",
    description: "新規顧客への初回訪問で、興味を引きアポイントを獲得する",
  },
  {
    id: 2,
    titleJa: "価格交渉への対応",
    difficulty: "hard",
    industry: "製造業",
    description: "価格が高いと言われた時の効果的な対応を練習",
  },
  {
    id: 3,
    titleJa: "競合他社との比較質問",
    difficulty: "medium",
    industry: "SaaS",
    description: "競合他社と比較された時の自社製品の強みを伝える",
  },
  {
    id: 4,
    titleJa: "クロージングの決め手",
    difficulty: "medium",
    industry: "金融",
    description: "商談の最終段階で確実にクロージングへ導く",
  },
];

export default function RoleplayPage() {
  const { user, isLoading: authLoading, logout } = useAuth();

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background p-4 pb-20">
        <div className="max-w-lg mx-auto space-y-4">
          <Skeleton className="h-14 w-full rounded-md" />
          <Skeleton className="h-24 w-full rounded-md" />
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
              <MessageSquare className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
            <span className="font-bold text-base">AIロープレ</span>
          </div>
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <Button size="icon" variant="ghost" onClick={() => logout()}>
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-5 space-y-4">
        <Card className="p-4 bg-gradient-to-br from-violet-500/10 to-purple-500/10 border-violet-500/20">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-md bg-violet-500/10 flex items-center justify-center flex-shrink-0">
              <Bot className="w-5 h-5 text-violet-500" />
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-sm mb-1">AIとロープレ練習</h2>
              <p className="text-xs text-muted-foreground mb-3">
                AIが顧客役となり、リアルな商談をシミュレーション。練習後はAIがフィードバックを提供します。
              </p>
              <Button size="sm" className="gap-1.5">
                <Play className="w-3.5 h-3.5" />
                クイックスタート
              </Button>
            </div>
          </div>
        </Card>

        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-sm">シナリオ一覧</h2>
          <Button variant="outline" size="sm" className="gap-1">
            <Plus className="w-3.5 h-3.5" />
            カスタム作成
          </Button>
        </div>

        <div className="space-y-3">
          {scenarios.map((scenario) => (
            <Card key={scenario.id} className="p-4 hover-elevate cursor-pointer">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-md bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-violet-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm mb-1">{scenario.titleJa}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{scenario.description}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-[10px] px-1.5 py-0">
                      {scenario.industry}
                    </Badge>
                    <Badge
                      className={`text-[10px] px-1.5 py-0 ${
                        scenario.difficulty === "easy"
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                          : scenario.difficulty === "medium"
                          ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                          : "bg-rose-500/10 text-rose-600 dark:text-rose-400"
                      }`}
                    >
                      {scenario.difficulty === "easy" ? "初級" : scenario.difficulty === "medium" ? "中級" : "上級"}
                    </Badge>
                  </div>
                </div>
                <Play className="w-4 h-4 text-primary mt-2 flex-shrink-0" />
              </div>
            </Card>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}