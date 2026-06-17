import { Zap } from "lucide-react";
import Link from "next/link";

const guideSteps = [
  {
    step: 1,
    title: "アカウント作成",
    description: "Googleアカウントで簡単ログイン。30秒で始められます。",
    icon: "🚀",
  },
  {
    step: 2,
    title: "AIロープレを体験",
    description: "AIが顧客役を務める模擬商談を実際に体験。初めての方でも安心のガイド付き。",
    icon: "🎯",
  },
  {
    step: 3,
    title: "スキル診断を受ける",
    description: "ロープレ後、AIが4軸であなたの営業スキルを診断。強み・弱みを可視化。",
    icon: "📊",
  },
  {
    step: 4,
    title: "スキルカードで学習",
    description: "診断結果に基づいたおすすめのスキルカードで、効果的に学習。",
    icon: "📚",
  },
  {
    step: 5,
    title: "継続的に練習",
    description: "学習カレンダーで習慣化。月単位での成長を実感できます。",
    icon: "📅",
  },
];

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <Link href="/" className="flex items-center gap-2 mb-8">
          <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
            <Zap className="w-3 h-3 text-primary-foreground" />
          </div>
          <span className="font-semibold text-sm">DealCoach</span>
        </Link>

        <h1 className="text-2xl font-bold mb-2">使い方ガイド</h1>
        <p className="text-muted-foreground mb-8">
          DealCoachを使った営業スキル向上のステップをご紹介します。
        </p>

        <div className="space-y-6">
          {guideSteps.map((item) => (
            <div key={item.step} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg">
                  {item.icon}
                </div>
                {item.step < guideSteps.length && (
                  <div className="w-px flex-1 bg-border mt-2" />
                )}
              </div>
              <div className="flex-1 pb-6">
                <h2 className="font-semibold mb-1">
                  STEP {item.step}: {item.title}
                </h2>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 rounded-lg bg-muted/50">
          <h2 className="font-semibold text-sm mb-2">よくある質問</h2>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-medium">Q: 無料プランで何ができますか？</p>
              <p className="text-muted-foreground">A: 3つの基本スキルカード学習、月3回のAIロープレ、基本スキル診断が利用可能です。</p>
            </div>
            <div>
              <p className="font-medium">Q: ロープレの結果は保存されますか？</p>
              <p className="text-muted-foreground">A: はい、全ての練習結果は自動的に保存され、後から見返すことができます。</p>
            </div>
            <div>
              <p className="font-medium">Q: スマートフォンでも使えますか？</p>
              <p className="text-muted-foreground">A: はい、スマートフォン・タブレット・PCの全てのデバイスでご利用いただけます。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}