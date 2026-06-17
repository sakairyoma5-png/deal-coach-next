import { Zap } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <Link href="/" className="flex items-center gap-2 mb-8">
          <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
            <Zap className="w-3 h-3 text-primary-foreground" />
          </div>
          <span className="font-semibold text-sm">DealCoach</span>
        </Link>

        <h1 className="text-2xl font-bold mb-6">プライバシーポリシー</h1>

        <div className="prose prose-sm dark:prose-invert max-w-none">
          <p>最終更新日: 2026年1月1日</p>

          <h2 className="text-lg font-semibold mt-6 mb-2">1. 収集する情報</h2>
          <p>
            本サービスは、サービスの提供に必要な最小限の情報を収集します。具体的には、以下の情報を収集することがあります：
          </p>
          <ul>
            <li>氏名、メールアドレスなどのアカウント情報</li>
            <li>利用状況に関するデータ（練習記録、スコア等）</li>
            <li>サービス改善のための利用ログ</li>
          </ul>

          <h2 className="text-lg font-semibold mt-6 mb-2">2. 情報の利用目的</h2>
          <p>収集した情報は、以下の目的で利用されます：</p>
          <ul>
            <li>本サービスの提供・運営</li>
            <li>ユーザーサポート</li>
            <li>サービス改善・新機能開発</li>
            <li>利用統計の分析</li>
          </ul>

          <h2 className="text-lg font-semibold mt-6 mb-2">3. 情報の共有</h2>
          <p>
            本サービスは、法令に基づく場合を除き、ユーザーの個人情報を第三者に開示・共有することはありません。
          </p>

          <h2 className="text-lg font-semibold mt-6 mb-2">4. データの保護</h2>
          <p>
            本サービスは、ユーザーのデータを保護するために適切なセキュリティ対策を実施しています。
          </p>

          <h2 className="text-lg font-semibold mt-6 mb-2">5. お問い合わせ</h2>
          <p>
            プライバシーポリシーに関するお問い合わせは、本サービス内のお問い合わせ機能よりご連絡ください。
          </p>
        </div>
      </div>
    </div>
  );
}