interface Props {
  html: boolean;
  children: any;
  className: string;
}

export function Code({ html = false, children }: Props) {
  return (
    <code
      className={`rounded-md px-1.5 font-['Fira_Code'] font-normal ${
        html
          ? "bg-pink-500/[0.15] text-gray-900"
          : "bg-gray-800/[0.5] text-gray-400"
      } text-sm`}
    >
      {children}
    </code>
  );
}
