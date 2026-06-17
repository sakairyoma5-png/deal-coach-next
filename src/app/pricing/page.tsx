"use client";

import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { Zap, CheckCircle2, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "¥0",
    period: "月",
    description: "個人で始める方に",
    features: [
      "3つの基本スキルカード",
      "AIロープレ3回/月",
      "基本スキル診断",
      "学習カレンダー",
    ],
    cta: "無料で始める",
    popular: false,
  },
  {
    name: "Basic",
    price: "¥980",
    period: "月",
    description: "本格的に学びたい方に",
    features: [
      "全てのスキルカード",
      "AIロープレ30回/月",
      "詳細スキル診断",
      "AIレコメンド",
      "カスタムシナリオ作成",
    ],
    cta: "Basicプランに登録",
    popular: true,
  },
  {
    name: "Pro",
    price: "¥1,980",
    period: "月",
    description: "プロフェッショナル向け",
    features: [
      "Basicの全ての機能",
      "AIロープレ無制限",
      "優先サポート",
      "組織機能（3名まで）",
      "チーム分析ダッシュボード",
    ],
    cta: "Proプランに登録",
    popular: false,
  },
  {
    name: "Team",
    price: "¥5,980",
    period: "月",
    description: "チーム・組織向け",
    features: [
      "Proの全ての機能",
      "メンバー管理（最大20名）",
      "カリキュラム管理機能",
      "管理者ダッシュボード",
      "組織全体の分析レポート",
    ],
    cta: "Teamプランに登録",
    popular: false,
  },
];

export default function PricingPage() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
            <span className="font-bold text-base">DealCoach</span>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            {user ? (
              <Link href="/dashboard">
                <Button variant="outline" size="sm">ダッシュボード</Button>
              </Link>
            ) : (
              <Link href="/login">
                <Button variant="outline" size="sm">ログイン</Button>
              </Link>
            )}
          </div>
        </div>
      </header>

      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              シンプルな料金プラン
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              無料から始めて、成長に合わせてアップグレード
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`p-6 relative ${
                  plan.popular ? "border-primary shadow-md" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground gap-1">
                      <Sparkles className="w-3 h-3" />
                      おすすめ
                    </Badge>
                  </div>
                )}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mb-1">{plan.name}</h2>
                  <div className="flex items-baseline gap-0.5 mb-1">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">/{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}