import md from "./README.md?raw";
import sql from "./createTable.sql?raw";

export default {
  key: "timehandler",
  title: "时间处理挑战",
  initSQL: sql,
  content: md,
  defaultSQL: "select * from student",
  answer:
    "SELECT \n" +
    "    s_id,\n" +
    "    s_name,\n" +
    "    strftime('%Y', 'now') -  strftime('%Y', s_birth) as '年龄'\n" +
    "FROM \n" +
    "    student",
  hint: "sqlite中，转化时间用strftime",
  type: "custom",
} as LevelType;
