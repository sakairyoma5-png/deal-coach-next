"use client";

import { useAuth } from "@/hooks/use-auth";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { ThemeToggle } from "@/components/theme-toggle";
import { BottomNav } from "@/components/bottom-nav";
import Link from "next/link";
import { Zap, User, Mail, LogOut, ArrowLeft, Crown, CreditCard, Bell } from "lucide-react";

export default function ProfilePage() {
  const { user, isLoading: authLoading, logout } = useAuth();

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
            <span className="font-bold text-base">プロフィール</span>
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
        <Card className="p-6">
          <div className="flex flex-col items-center text-center">
            <Avatar
              className="w-20 h-20 mb-4"
              src={user?.user_metadata?.avatar_url || null}
              fallback={(user?.user_metadata?.full_name || user?.email)?.[0]?.toUpperCase() || "U"}
            />
            <h1 className="font-bold text-lg">
              {user?.user_metadata?.full_name || "ユーザー"}
            </h1>
            <p className="text-sm text-muted-foreground">{user?.email}</p>
            <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
              <Crown className="w-3 h-3" />
              Free プラン
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <h2 className="font-semibold text-sm mb-3 flex items-center gap-2">
            <User className="w-4 h-4 text-muted-foreground" />
            アカウント設定
          </h2>
          <div className="space-y-1">
            <div className="flex items-center justify-between p-3 rounded-md hover:bg-muted/50 cursor-pointer">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">メールアドレス</span>
              </div>
              <span className="text-sm text-muted-foreground">{user?.email}</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-md hover:bg-muted/50 cursor-pointer">
              <div className="flex items-center gap-3">
                <Crown className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">プラン</span>
              </div>
              <Link href="/pricing" className="text-sm text-primary">
                プランを見る
              </Link>
            </div>
            <div className="flex items-center justify-between p-3 rounded-md hover:bg-muted/50 cursor-pointer">
              <div className="flex items-center gap-3">
                <CreditCard className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">支払い設定</span>
              </div>
              <span className="text-xs text-muted-foreground">準備中</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-md hover:bg-muted/50 cursor-pointer">
              <div className="flex items-center gap-3">
                <Bell className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">通知設定</span>
              </div>
              <span className="text-xs text-muted-foreground">準備中</span>
            </div>
          </div>
        </Card>

        <div className="space-y-2">
          <Button
            variant="destructive"
            className="w-full gap-2"
            onClick={() => logout()}
          >
            <LogOut className="w-4 h-4" />
            ログアウト
          </Button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}