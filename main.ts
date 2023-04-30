import fs from 'fs';

interface User {
  id: string;
  name: string;
  displayName: string;
  email: string;
}

interface Page {
  title: string;
  created: number;
  updated: number;
  id: string;
  lines: string[];
}

interface TextData {
  name: string;
  displayName: string;
  exported: number;
  users: User[];
  pages: Page[];
}

const replaceText = (text: string, searchString: string, replaceString: string) => {
  return text.replace(new RegExp(searchString, 'g'), replaceString);
};

const replaceLines = (lines: string[]) => {
  return lines.map((line) => {
    return replaceText(line, '\\[\\*\\*\\*(.*?)\\]', '# $1');
  });
};

const main = async () => {
  const textData: TextData = JSON.parse(fs.readFileSync('./text.json', 'utf-8'));
  const updatedPages: Page[] = textData.pages.map((page) => {
    return {
      ...page,
      lines: replaceLines(page.lines),
    };
  });
  const updatedTextData: TextData = {
    ...textData,
    pages: updatedPages,
  };
  fs.writeFileSync('./updatedText.json', JSON.stringify(updatedTextData, null, 2), 'utf-8');
};

main().catch((error) => {
  console.error(error);
});
