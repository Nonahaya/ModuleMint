import { program } from "commander";

let pro = program;
pro
  .command("install <module>, <opction>")
  .description("Install Module to your node_modules")
  .aliases(["--i", "-i", "i"])
  .action((modulename: string,opt:string) => /*something*/{})
pro.command("remove <module>").aliases(["r","-r","--r"])
.description("Remove Module")
.action((modulename:string) => {})
pro.parse();
