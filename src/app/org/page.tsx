"use client";

import { useAuth } from "@/hooks/use-auth";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ThemeToggle } from "@/components/theme-toggle";
import { BottomNav } from "@/components/bottom-nav";
import Link from "next/link";
import { Zap, Building2, LogOut, ArrowLeft, Users, Plus, ChevronRight, Settings } from "lucide-react";

export default function OrganizationPage() {
  const { isLoading: authLoading, logout } = useAuth();

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background p-4 pb-20">
        <div className="max-w-lg mx-auto space-y-4">
          <Skeleton className="h-14 w-full rounded-md" />
          <Skeleton className="h-32 w-full rounded-md" />
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
              <Building2 className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
            <span className="font-bold text-base">組織</span>
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
            <Building2 className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-semibold text-lg mb-2">組織で学習を管理</h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-xs mx-auto">
            チームを作成してメンバーの学習状況を一元管理。カリキュラムの指定や進捗状況の確認ができます。
          </p>
          <div className="flex flex-col gap-2">
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              組織を作成する
            </Button>
            <Button variant="outline" className="gap-2">
              <Users className="w-4 h-4" />
              招待コードを入力
            </Button>
          </div>
        </Card>

        <Card className="p-4">
          <h2 className="font-semibold text-sm mb-3 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-muted-foreground" />
            所属組織
          </h2>
          <p className="text-sm text-muted-foreground text-center py-4">
            まだ所属組織がありません
          </p>
        </Card>
      </main>

      <BottomNav />
    </div>
  );
}