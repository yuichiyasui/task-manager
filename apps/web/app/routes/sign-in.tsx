import { getMetaTitle } from "~/utils/meta";

export function meta() {
  return [getMetaTitle({ pageTitle: "ログイン" })];
}

export default function Page() {
  return (
    <main>
      <h1>ログイン</h1>
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
          <button type="submit">ログイン</button>
        </div>
      </form>
    </main>
  );
}
