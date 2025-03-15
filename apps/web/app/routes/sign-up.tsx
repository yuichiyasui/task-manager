import { getMetaTitle } from "~/utils/meta";

export function meta() {
  return [getMetaTitle({ pageTitle: "ユーザー登録" })];
}

export default function Page() {
  return (
    <main>
      <h1>ユーザー登録</h1>
      <form>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input id="email" type="email" />
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input id="password" type="password" />
        </div>
        <div>
          <label htmlFor="passwordConfirmation">パスワード（確認）</label>
          <input id="passwordConfirmation" type="password" />
        </div>
        <div>
          <button type="submit">登録</button>
        </div>
      </form>
    </main>
  );
}
