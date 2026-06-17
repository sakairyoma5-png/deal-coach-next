"use client";

import { useAuth } from "@/hooks/use-auth";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ThemeToggle } from "@/components/theme-toggle";
import { BottomNav } from "@/components/bottom-nav";
import Link from "next/link";
import { BookOpen, Sparkles, Search, LogOut, ArrowLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const allCards = [
  { titleJa: "SPIN営業法", category: "ヒアリング", difficulty: "intermediate", isPremium: false, descriptionJa: "ニール・ラッカムが開発した体系的な質問手法。状況質問・問題質問・示唆質問・解決質問の4段階で顧客の潜在ニーズを引き出します。" },
  { titleJa: "ミラーリング", category: "ラポール構築", difficulty: "beginner", isPremium: false, descriptionJa: "顧客の言葉遣い、声のトーン、ボディランゲージをさりげなく反映する信頼構築テクニック。" },
  { titleJa: "反論処理", category: "クロージング", difficulty: "advanced", isPremium: false, descriptionJa: "顧客の懸念や反論に対処する体系的なアプローチ。抵抗を拒絶ではなく情報要求と捉えます。" },
  { titleJa: "アクティブリスニング", category: "ヒアリング", difficulty: "beginner", isPremium: false, descriptionJa: "顧客の発言に完全に集中し、言葉の背後にある感情やニーズを把握するコミュニケーション技法。" },
  { titleJa: "コンサルティング営業", category: "提案", difficulty: "intermediate", isPremium: false, descriptionJa: "信頼されるアドバイザーとして顧客のビジネス課題を深く理解し最適なソリューションを提案する営業哲学。" },
  { titleJa: "クロージングテクニック", category: "クロージング", difficulty: "advanced", isPremium: false, descriptionJa: "仮定法・要約・緊急性クロージングなど、商談を合意に導くための手法群。" },
  { titleJa: "FOMO活用法", category: "心理学", difficulty: "intermediate", isPremium: false, descriptionJa: "「取り残される恐怖」を活用し購買決定に緊急性を生み出す心理的販売テクニック。" },
  { titleJa: "アンカリング効果", category: "心理学", difficulty: "intermediate", isPremium: false, descriptionJa: "最初の情報がその後の判断に影響を与える認知バイアスを活用したテクニック。" },
  { titleJa: "ソーシャルプルーフ", category: "心理学", difficulty: "beginner", isPremium: false, descriptionJa: "他者の行動や決定に従う人間の傾向を活用する説得テクニック。" },
  { titleJa: "バックトラッキング", category: "ラポール構築", difficulty: "beginner", isPremium: false, descriptionJa: "顧客の重要な言葉をそのまま繰り返し、理解を示して詳細共有を促す傾聴テクニック。" },
  { titleJa: "オープンクエスチョン", category: "ヒアリング", difficulty: "advanced", isPremium: false, descriptionJa: "広がりのある詳細な回答を引き出す質問設計。顧客にナラティブの主導権を渡します。" },
  { titleJa: "ニーズの深掘り", category: "ヒアリング", difficulty: "intermediate", isPremium: false, descriptionJa: "表面的ニーズの下にある根本的な動機や感情的ドライバーを探る発見テクニック。" },
  { titleJa: "ストーリーテリング", category: "提案", difficulty: "advanced", isPremium: false, descriptionJa: "営業メッセージを記憶に残る物語に織り込み、感情に訴える説得技術。" },
  { titleJa: "ベネフィット提示", category: "提案", difficulty: "intermediate", isPremium: false, descriptionJa: "製品機能を顧客の具体的なビジネス成果や利益に変換するプレゼン手法。" },
  { titleJa: "仮定クロージング", category: "クロージング", difficulty: "advanced", isPremium: false, descriptionJa: "顧客が購入を決めた前提で進め、「もし」から「いつ」へ自然に移行させる技法。" },
  { titleJa: "沈黙の活用", category: "交渉術", difficulty: "advanced", isPremium: false, descriptionJa: "意図的な沈黙で心理的プレッシャーを生み出し、相手の情報開示を促す交渉テクニック。" },
  { titleJa: "ウィンウィン交渉", category: "交渉術", difficulty: "intermediate", isPremium: false, descriptionJa: "双方が価値を得られるソリューションを見つける協調的な交渉アプローチ。" },
  { titleJa: "BATNA活用", category: "交渉術", difficulty: "advanced", isPremium: false, descriptionJa: "交渉不成立時の最善代替案を理解し強化することで交渉力を高める戦略。" },
  { titleJa: "返報性の法則", category: "心理学", difficulty: "beginner", isPremium: false, descriptionJa: "好意や価値の提供に対してお返しをしたいという心理を活用する原則。" },
  { titleJa: "ペーシング", category: "ラポール構築", difficulty: "beginner", isPremium: false, descriptionJa: "顧客のリズムやエネルギーに合わせてから徐々に会話を導くラポール構築技法。" },
  { titleJa: "FAB法", category: "提案", difficulty: "beginner", isPremium: false, descriptionJa: "機能・優位性・利益を結びつける体系的なプレゼンテーションフレームワーク。" },
  { titleJa: "テストクロージング", category: "クロージング", difficulty: "intermediate", isPremium: false, descriptionJa: "商談全体を通じて顧客の購買準備度を測る低圧力の質問テクニック。" },
  { titleJa: "価格交渉術", category: "交渉術", difficulty: "advanced", isPremium: false, descriptionJa: "案件の価値を守りながら顧客の予算制約を満たす価格交渉の技術。" },
  { titleJa: "パラフレーズ", category: "ヒアリング", difficulty: "beginner", isPremium: false, descriptionJa: "顧客のメッセージを自分の言葉で言い換え、真の理解を示す傾聴技法。" },
  { titleJa: "共感の技術", category: "ラポール構築", difficulty: "beginner", isPremium: false, descriptionJa: "顧客の感情や視点を理解し認めることを意図的に実践する技術。" },
  { titleJa: "フレーミング効果", category: "心理学", difficulty: "intermediate", isPremium: false, descriptionJa: "同じ情報でも提示の仕方で反応が変わる認知バイアスを活用する技法。" },
  { titleJa: "決断疲れ対策", category: "心理学", difficulty: "intermediate", isPremium: false, descriptionJa: "選択肢を整理し認知負荷を軽減することで顧客の決断を支援する戦略。" },
  { titleJa: "コントラスト原理", category: "心理学", difficulty: "beginner", isPremium: false, descriptionJa: "提示順序を戦略的に組み立て選択肢を魅力的に見せる知覚現象の活用。" },
  { titleJa: "感情トリガー", category: "心理学", difficulty: "advanced", isPremium: false, descriptionJa: "恐怖や誇りなど顧客の感情的動機に訴求し行動動機を生み出す説得技法。" },
  { titleJa: "希少性の法則", category: "心理学", difficulty: "beginner", isPremium: false, descriptionJa: "限定性を誠実に伝えることで緊急性を生み出す心理原則の活用。" },
  { titleJa: "質問のピラミッド", category: "ヒアリング", difficulty: "beginner", isPremium: false, descriptionJa: "広い質問から詳細へ体系的に進む構造化された質問フレームワーク。" },
  { titleJa: "仮説提案法", category: "ヒアリング", difficulty: "advanced", isPremium: false, descriptionJa: "業界知識に基づく仮説を提示し確認・修正を求める高度なヒアリング技法。" },
  { titleJa: "課題マッピング", category: "ヒアリング", difficulty: "intermediate", isPremium: false, descriptionJa: "顧客の課題を構造化マップに整理し関係性や根本原因を明らかにする手法。" },
  { titleJa: "ヒアリングシートの活用", category: "ヒアリング", difficulty: "beginner", isPremium: false, descriptionJa: "構造化テンプレートで一貫した情報収集を確保する体系的手法。" },
  { titleJa: "自己開示の技術", category: "ラポール構築", difficulty: "beginner", isPremium: false, descriptionJa: "適切な個人的経験を共有し本物の人間的つながりを構築する技法。" },
  { titleJa: "ネームコーリング", category: "ラポール構築", difficulty: "beginner", isPremium: true, descriptionJa: "会話中に顧客の名前を戦略的に使用し個人的つながりを強化するテクニック。" },
  { titleJa: "類似性の法則", category: "ラポール構築", difficulty: "intermediate", isPremium: true, descriptionJa: "共通点を見つけ強調することで信頼形成を加速する心理原則の活用。" },
  { titleJa: "信頼構築の5ステップ", category: "ラポール構築", difficulty: "advanced", isPremium: true, descriptionJa: "信頼性から支援者化まで5段階で深い信頼を構築する体系的手法。" },
  { titleJa: "ROI提案法", category: "提案", difficulty: "advanced", isPremium: true, descriptionJa: "ソリューションの投資対効果を具体的な財務用語で定量化する提案技法。" },
  { titleJa: "ソリューションセリング", category: "提案", difficulty: "intermediate", isPremium: true, descriptionJa: "顧客固有の問題を診断しカスタマイズされたソリューションを設計する手法。" },
  { titleJa: "比較提案法", category: "提案", difficulty: "intermediate", isPremium: true, descriptionJa: "代替案と自社ソリューションを比較し独自の強みを際立たせるプレゼン技法。" },
  { titleJa: "ビジュアルプレゼン", category: "提案", difficulty: "intermediate", isPremium: true, descriptionJa: "チャートや図表を活用し複雑な提案を記憶に残るものにするプレゼン手法。" },
  { titleJa: "タイムラインクロージング", category: "クロージング", difficulty: "intermediate", isPremium: true, descriptionJa: "導入タイムラインにマッピングし遅延のコストを示す緊急性クロージング技法。" },
  { titleJa: "選択肢クロージング", category: "クロージング", difficulty: "beginner", isPremium: true, descriptionJa: "2つ以上の選択肢を提示し「どれを選ぶか」に判断をシフトする技法。" },
  { titleJa: "サマリークロージング", category: "クロージング", difficulty: "beginner", isPremium: true, descriptionJa: "合意事項をまとめてポジティブ連想を強化し決断のモメンタムを生む技法。" },
  { titleJa: "紹介クロージング", category: "クロージング", difficulty: "intermediate", isPremium: true, descriptionJa: "既存顧客の成功事例や紹介を活用し知覚リスクを軽減するクロージング技法。" },
  { titleJa: "譲歩戦略", category: "交渉術", difficulty: "advanced", isPremium: true, descriptionJa: "計画的で戦略的な譲歩でコアバリューを守り相互的好意を生む交渉テクニック。" },
  { titleJa: "デッドロック解消法", category: "交渉術", difficulty: "advanced", isPremium: true, descriptionJa: "行き詰まりを創造的問題解決で打開する交渉技法セット。" },
  { titleJa: "マルチイシュー交渉", category: "交渉術", difficulty: "advanced", isPremium: true, descriptionJa: "複数の論点に議論を拡大し総価値を増大させるトレードオフを生む戦略。" },
  { titleJa: "交渉のフレームワーク", category: "交渉術", difficulty: "advanced", isPremium: true, descriptionJa: "準備から実行まで交渉プロセス全体をカバーする包括的フレームワーク。" },
];

const categories = ["すべて", "ヒアリング", "ラポール構築", "クロージング", "提案", "交渉術", "心理学"];

const difficultyColor: Record<string, string> = {
  beginner: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  intermediate: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  advanced: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
};

const difficultyLabel: Record<string, string> = {
  beginner: "初級",
  intermediate: "中級",
  advanced: "上級",
};

export default function SkillsPage() {
  const { isLoading: authLoading, logout } = useAuth();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("すべて");

  const filtered = allCards.filter((card) => {
    const matchSearch = card.titleJa.includes(search) || card.descriptionJa.includes(search);
    const matchCategory = category === "すべて" || card.category === category;
    return matchSearch && matchCategory;
  });

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background p-4 pb-20">
        <div className="max-w-lg mx-auto space-y-4">
          <Skeleton className="h-14 w-full rounded-md" />
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
              <BookOpen className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
            <span className="font-bold text-base">スキルカード</span>
            <span className="text-xs text-muted-foreground">全{allCards.length}枚</span>
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
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="スキルカードを検索..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-10 pl-9 pr-4 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={cat === category ? "default" : "outline"}
              size="sm"
              className="whitespace-nowrap text-xs"
              onClick={() => setCategory(cat)}
            >
              {cat}
              {cat !== "すべて" && (
                <span className="ml-1 text-[10px] opacity-70">
                  {allCards.filter((c) => c.category === cat).length}
                </span>
              )}
            </Button>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          {filtered.length}枚のカードを表示
        </p>

        <div className="space-y-3">
          {filtered.map((card, i) => (
            <Card key={i} className="p-4 hover-elevate cursor-pointer">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {card.isPremium ? (
                    <Sparkles className="w-5 h-5 text-amber-500" />
                  ) : (
                    <BookOpen className="w-5 h-5 text-primary" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-sm truncate">{card.titleJa}</h3>
                    {card.isPremium && (
                      <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                        Premium
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                    {card.descriptionJa}
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-[10px] px-1.5 py-0">
                      {card.category}
                    </Badge>
                    <Badge
                      className={`text-[10px] px-1.5 py-0 ${difficultyColor[card.difficulty] || ""}`}
                    >
                      {difficultyLabel[card.difficulty] || card.difficulty}
                    </Badge>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground mt-2 flex-shrink-0" />
              </div>
            </Card>
          ))}
          {filtered.length === 0 && (
            <p className="text-center text-sm text-muted-foreground py-8">
              該当するスキルカードが見つかりませんでした
            </p>
          )}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}