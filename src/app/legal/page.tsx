import { Zap } from "lucide-react";
import Link from "next/link";

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <Link href="/" className="flex items-center gap-2 mb-8">
          <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
            <Zap className="w-3 h-3 text-primary-foreground" />
          </div>
          <span className="font-semibold text-sm">DealCoach</span>
        </Link>

        <h1 className="text-2xl font-bold mb-6">特定商取引法に基づく表記</h1>

        <div className="prose prose-sm dark:prose-invert max-w-none">
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b">
                <td className="py-3 pr-4 font-medium">販売事業者</td>
                <td className="py-3">DealCoach運営</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-medium">運営統括責任者</td>
                <td className="py-3">運営責任者</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-medium">所在地</td>
                <td className="py-3">東京都渋谷区</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-medium">電話番号</td>
                <td className="py-3">記載省略（メールにて問い合わせ）</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-medium">メールアドレス</td>
                <td className="py-3">お問い合わせフォームよりご連絡ください</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-medium">販売価格</td>
                <td className="py-3">各プランページに表示</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-medium">支払方法</td>
                <td className="py-3">クレジットカード</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-medium">商品の提供時期</td>
                <td className="py-3">お支払い完了後、即時利用可能</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 pr-4 font-medium">キャンセル・返金</td>
                <td className="py-3">お支払い後のキャンセル・返金は原則不可</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium">動作環境</td>
                <td className="py-3">最新のChrome、Safari、Firefox推奨</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}