import { classnames } from "~/utils/classnames";

type Props = {
  links: {
    href: string;
    label: string;
  }[];
};

export const Breadcrumb = ({ links }: Props) => {
  return (
    <nav aria-label="パンくずリスト">
      <ol className={classnames("flex", "items-center", "whitespace-nowrap")}>
        {links.map((link, index) => {
          const isLast = links.length - 1 === index;
          if (!isLast) {
            return (
              <li
                key={link.href}
                className={classnames("inline-flex", "items-center")}
              >
                <a
                  className={classnames(
                    "flex",
                    "items-center",
                    "text-sm",
                    "text-gray-500",
                    "hover:text-blue-600",
                    "focus:outline-hidden",
                    "focus:text-blue-600",
                  )}
                  href={link.href}
                >
                  {link.label}
                  {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                  <svg
                    className={classnames(
                      "shrink-0",
                      "mx-2",
                      "size-4",
                      "text-gray-400",
                    )}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </li>
            );
          }

          return (
            <li
              key={link.href}
              className={classnames(
                "inline-flex",
                "items-center",
                "text-sm",
                "font-semibold",
                "text-gray-800",
                "truncate",
              )}
              aria-current="page"
            >
              {link.label}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
