import { Zap } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <Link href="/" className="flex items-center gap-2 mb-8">
          <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
            <Zap className="w-3 h-3 text-primary-foreground" />
          </div>
          <span className="font-semibold text-sm">DealCoach</span>
        </Link>

        <h1 className="text-2xl font-bold mb-6">利用規約</h1>

        <div className="prose prose-sm dark:prose-invert max-w-none">
          <p>最終更新日: 2026年1月1日</p>

          <h2 className="text-lg font-semibold mt-6 mb-2">1. はじめに</h2>
          <p>
            本利用規約（以下「本規約」）は、DealCoach（以下「本サービス」）の利用条件を定めるものです。
            本サービスを利用することにより、本規約に同意したものとみなされます。
          </p>

          <h2 className="text-lg font-semibold mt-6 mb-2">2. アカウント</h2>
          <p>
            ユーザーは、本サービスの利用にあたり、正確な情報を提供し、アカウント情報を適切に管理する責任を負います。
            ユーザーは、アカウントの不正使用について直ちに通知するものとします。
          </p>

          <h2 className="text-lg font-semibold mt-6 mb-2">3. プライバシー</h2>
          <p>
            本サービスは、ユーザーのプライバシーを尊重します。個人情報の取り扱いについては、プライバシーポリシーをご参照ください。
          </p>

          <h2 className="text-lg font-semibold mt-6 mb-2">4. 知的財産権</h2>
          <p>
            本サービスに含まれるコンテンツ、ロゴ、商標などの知的財産権は、本サービス提供者に帰属します。
          </p>

          <h2 className="text-lg font-semibold mt-6 mb-2">5. 免責事項</h2>
          <p>
            本サービスは「現状のまま」提供され、明示または黙示を問わずいかなる保証も行いません。
            本サービスの利用により生じた損害について、本サービス提供者は責任を負いません。
          </p>

          <h2 className="text-lg font-semibold mt-6 mb-2">6. サービスの変更・終了</h2>
          <p>
            本サービス提供者は、事前の通知なく本サービスの内容を変更し、または提供を終了することができます。
          </p>

          <h2 className="text-lg font-semibold mt-6 mb-2">7. 準拠法</h2>
          <p>
            本規約は、日本法を準拠法とし、解釈されるものとします。
          </p>
        </div>
      </div>
    </div>
  );
}