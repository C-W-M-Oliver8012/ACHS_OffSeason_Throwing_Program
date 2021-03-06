let velocityDayData = [];
velocityDayData.push({Exercise: "PlyoCare Reverse Throws", Reps: "No more than 10 reps with 1 kg AND 2kg balls"});
velocityDayData.push({Exercise: "PlyoCare Pivot Pickoffs", Reps: "No more than 10 reps with 1 kg AND 2kg balls"});
velocityDayData.push({Exercise: "PlyoCare Roll-In Throws", Reps: "No more than 10 reps with 1 kg AND 450g balls"});
velocityDayData.push({Exercise: "PlyoCare Rocker Throws", Reps: "1 throw each with blue, red, yellow, gray"});
velocityDayData.push({Exercise: "PlyoCare Walking Windup", Reps: "1 throw each with blue, red, yellow, gray"});
velocityDayData.push({Exercise: "Jaeger Long Toss Series", Reps: "Extension Phase/Light Catch"});
velocityDayData.push({Exercise: "Run and Gun, Weighted Balls", Reps: "3-4 throws each (5, 6, 7, 5, 4, 3); first throw at 80%"});
velocityDayData.title = "Velocity Day";
velocityDayData.notes = "Use PlyoCare drills to warm up. Radar weighted balls.";

let plyoCareVelocityData = [];
plyoCareVelocityData.push({Exercise: "PlyoCare Reverse Throws", Reps: "10 reps with 1 kg AND 2kg balls"});
plyoCareVelocityData.push({Exercise: "PlyoCare Reverse Throws (Optional)", Reps: "10 reps with 1 kg AND 2kg balls"});
plyoCareVelocityData.push({Exercise: "PlyoCare Pivot Pickoffs", Reps: "10 reps with 1 kg AND 2kg balls"});
plyoCareVelocityData.push({Exercise: "PlyoCare Roll-In Throws", Reps: "3 reps with 1 kg ball, 5 reps with 450g ball"});
plyoCareVelocityData.push({Exercise: "PlyoCare Rocker Throws", Reps: "1 throw each with blue, red, yellow, gray"});
plyoCareVelocityData.push({Exercise: "PlyoCare Rocker Throws", Reps: "1 throw each with blue, red, yellow, gray"});
plyoCareVelocityData.push({Exercise: "PlyoCare Walking Windup", Reps: "1 throw each with blue, red, yellow, gray"});
plyoCareVelocityData.push({Exercise: "PlyoCare Walking Windup", Reps: "1 throw each with blue, red, yellow, gray"});
plyoCareVelocityData.title = "PlyoCare Velocity";
plyoCareVelocityData.notes = "Use first two PlyoCare drills to warm up. Radar roll-ins, rockers, and walking windups.";

let hybridAData = [];
hybridAData.push({Exercise: "PlyoCare Reverse Throws", Reps: "10 reps with 1 kg AND 2 kg balls"});
hybridAData.push({Exercise: "PlyoCare Reverse Throws", Reps: "10 reps with 1 kg AND 2 kg balls"});
hybridAData.push({Exercise: "PlyoCare Pivot Pickoffs", Reps: "10 reps with 1 kg AND 2 kg balls"});
hybridAData.push({Exercise: "PlyoCare Roll-In Throws", Reps: "10 reps with 1 kg AND 450g balls"});
hybridAData.push({Exercise: "PlyoCare Rocker Throws", Reps: "1 throw each with blue, red, yellow, gray"});
hybridAData.push({Exercise: "PlyoCare Rocker Throws", Reps: "1 throw each with blue, red, yellow, gray"});
hybridAData.push({Exercise: "PlyoCare Rocker Throws", Reps: "1 throw each with blue, red, yellow, gray"});
hybridAData.push({Exercise: "PlyoCare Walking Windups", Reps: "1 throw each with blue, red, yellow, gray"});
hybridAData.push({Exercise: "PlyoCare Walking Windups", Reps: "1 throw each with blue, red, yellow, gray"});
hybridAData.push({Exercise: "PlyoCare Walking Windups", Reps: "1 throw each with blue, red, yellow, gray"});
hybridAData.push({Exercise: "Jaeger Long Toss Series", Reps: "Max distance, plus 8-12 compression throws"});
hybridAData.title = "Hybrid A";
hybridAData.notes = "All PlyoCare reps done @ 90-100% RPE.";

let hybridBData = [];
hybridBData.push({Exercise: "PlyoCare Reverse Throws", Reps: "10 reps with 1 kg AND 2 kg balls"});
hybridBData.push({Exercise: "PlyoCare Pivot Pickoffs", Reps: "10 reps with 1 kg AND 2 kg balls"});
hybridBData.push({Exercise: "PlyoCare Roll-Ins", Reps: "10 reps with 1 kg AND 450g balls"});
hybridBData.push({Exercise: "PlyoCare Rocker Throws", Reps: "1 throw each with blue, red, yellow, gray"});
hybridBData.push({Exercise: "PlyoCare Rocker Throws", Reps: "1 throw each with blue, red, yellow, gray"});
hybridBData.push({Exercise: "PlyoCare Walking Windups", Reps: "1 throw each with blue, red, yellow, gray"});
hybridBData.push({Exercise: "PlyoCare Walking Windups", Reps: "1 throw each with blue, red, yellow, gray"});
hybridBData.push({Exercise: "Jaeger Long Toss Series", Reps: "Extension Phase"});
hybridBData.title = "Hybrid B";
hybridBData.notes = "All PlyoCare reps done @ 70-80% RPE.";

let recoveryData = [];
recoveryData.push({Exercise: "PlyoCare Reverse Throws", Reps: "10 reps with 1 kg AND 2 kg balls"});
recoveryData.push({Exercise: "PlyoCare Pivot Pickoffs", Reps: "10 reps with 1 kg AND 2 kg balls"});
recoveryData.push({Exercise: "Light Catch", Reps: "No more than 30 throws"});
recoveryData.title = "Recovery";
recoveryData.notes = "All PlyoCare and light catch throws done at NO MORE THAN 60% RPE.";

let selectData = [];
selectData["Week 1"] = ["Off", "Hybrid B", "Recovery", "Hybrid B", "Hybrid B", "Recovery", "Off"];
selectData["Week 2"] = ["Off", "Hybrid B", "Hybrid B", "Recovery", "Hybrid B", "Recovery", "Hybrid A"];
selectData["Week 3"] = ["Off", "Off", "Hybrid A", "Recovery", "Hybrid B", "Hybrid A", "Hybrid B"];
selectData["Week 4"] = ["Recovery", "Off", "Hybrid B", "Hybrid A", "Recovery", "Hybrid B", "Recovery"];
selectData["Week 5"] = ["PlyoCare Velocity", "Off", "Hybrid B", "Velocity", "Recovery", "Hybrid B", "Recovery"];
selectData["Week 6"] = ["PlyoCare Velocity", "Off", "Hybrid B", "Velocity", "Recovery", "Hybrid B", "Recovery"];
selectData["Week 7"] = ["PlyoCare Velocity", "Off", "Hybrid B", "Velocity", "Recovery", "Hybrid B", "Hybrid B"];
selectData["Week 8"] = ["Off", "Off", "Hybrid B", "Recovery", "Recovery/Off", "Hybrid B", "Recovery"];
selectData["Week 9"] = ["PlyoCare Velocity", "Off", "Hybrid B", "Velocity", "Recovery", "Hybrid B", "Recovery"];
selectData["Week 10"] = ["PlyoCare Velocity", "Off", "Hybrid B", "Velocity", "Recovery", "Hybrid B", "Recovery"];
selectData["Week 11"] = ["PlyoCare Velocity", "Off", "Hybrid B", "Velocity", "Recovery", "Hybrid B", "Hybrid B"];
selectData["Week 12"] = ["Off", "Off", "Hybrid B", "Recovery", "Recovery/Off", "Hybrid B", "Recovery"];