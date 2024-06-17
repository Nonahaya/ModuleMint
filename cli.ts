import { program } from "commander";

let pro = program;
pro
  .command("install <module>, <option>")
  .description("Install Module to your node_modules")
  .aliases(["--i", "-i", "i"])
  .action((modulename: string,opt:string) => /*something*/{})
pro.command("remove <module>, <option>").aliases(["r","-r","--r"])
.description("Remove Module")
.action((modulename:string) => {})
pro.parse();
