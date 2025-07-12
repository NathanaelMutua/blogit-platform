import { Request, Response, NextFunction } from "express";
import MarkdownIt from "markdown-it";
import anchor from "markdown-it-anchor"; // allows my headings (#) to look have links
import hljs from "markdown-it-highlightjs"; // allows user to highlight with colors

const myConverter = new MarkdownIt().use(anchor).use(hljs);

const markdownToHtml = (req: Request, res: Response, next: NextFunction) => {
  //checks if the content is a string
  if (typeof req.body.content === "string") {
    req.body.htmlContent = myConverter.render(req.body.content);
  } else {
    res.status(400).json({
      game_of_throws: "Invalid content!",
      support: "nathanael.mutua.m@gmail.com",
    });
  }
  next();
};

export default markdownToHtml;
