const raisinAlarm = function(cookie) {
  let result = [];
  for (let ingrediant of cookie) {
    // console.log("ing = " + ing);
    if (ingrediant.includes("🍇")) {
      result.push("Raisin Alert");
    } else {
      result.push("All Good!");
    }
  }
  return result;
};


console.log(raisinAlarm(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));
