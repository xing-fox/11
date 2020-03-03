/*eslint-disable*/
var a_contexts = {};
var b_contexts = {};
var c_contexts = {};
var d_contexts = {};
var e_contexts = {};
var b_canvas_h
var b_canvas_w
var a_canvas_h
var a_canvas_w

var gameId = 0;
var curr_screen = 0
var src = require("../assets/checkers.png")



function changCanvas () {
  a_canvas.width = parseInt(a_canvas.offsetWidth) * 2
  a_canvas.height = parseInt(a_canvas.offsetHeight) * 2
}
export function drawCanvas (a_canvas, b_canvas, c_canvas, d_canvas, desk_id, grid_cols, grid_cols_small) {

  var a_context = a_canvas.getContext("2d");
  var b_context = b_canvas.getContext("2d");
  var c_context = c_canvas.getContext("2d");
  var d_context = d_canvas.getContext("2d");
  a_contexts[desk_id] = a_context;
  b_contexts[desk_id] = b_context;
  c_contexts[desk_id] = c_context;
  d_contexts[desk_id] = d_context;
  var grid_rows = 6;
  var grid_rows_small = 3;
  // 描绘边框
  a_canvas_h = a_canvas.height;
  a_canvas_w = a_canvas.width;
  a_context.clearRect(0, 0, a_canvas_w, a_canvas_h);
  var cell_height = a_canvas_h / grid_rows;
  var cell_width = a_canvas_h / grid_rows//a_canvas_w / grid_cols;
  // console.log(cell_height,cell_width)
  a_context.lineWidth = 1;
  a_context.strokeStyle = "#dedede"//"#dedede";

  // 结束边框描绘
  a_context.beginPath();
  // 准备画横线
  for (var col = 0; col <= grid_cols; col++) {
    var x = col * cell_width;
    a_context.moveTo(x, 0);
    a_context.lineTo(x, a_canvas_h);
  }
  // 准备画竖线
  for (var row = 0; row <= grid_rows; row++) {
    var y = row * cell_height;
    a_context.moveTo(0, y);
    a_context.lineTo(a_canvas_w, y);
  }
  a_context.stroke();

  // 描绘边框
  b_canvas_h = b_canvas.height;
  b_canvas_w = b_canvas.width;
  b_context.clearRect(0, 0, b_canvas_w, b_canvas_h);
  c_context.clearRect(0, 0, b_canvas_w, b_canvas_h);
  d_context.clearRect(0, 0, b_canvas_w, b_canvas_h);

  var cell_height_small = b_canvas_h / grid_rows_small;
  var cell_width_small = b_canvas_h / grid_rows_small;//b_canvas_w / grid_cols_small;
  b_context.lineWidth = 1;
  b_context.strokeStyle = "#dedede";

  // 结束边框描绘
  b_context.beginPath();
  // 准备画横线
  for (var col = 0; col <= grid_cols_small; col++) {
    var x = col * cell_width_small;
    b_context.moveTo(x, 0);
    b_context.lineTo(x, b_canvas_h);
  }
  // 准备画竖线
  for (var row = 0; row <= grid_rows_small; row++) {
    var y = row * cell_height_small;
    b_context.moveTo(0, y);
    b_context.lineTo(b_canvas_w, y);
  }
  b_context.stroke();

  c_context.lineWidth = 1;
  c_context.strokeStyle = "#dedede";

  // 结束边框描绘
  c_context.beginPath();
  // 准备画横线
  for (var col = 0; col <= grid_cols_small; col++) {
    var x = col * cell_width_small;
    c_context.moveTo(x, 0);
    c_context.lineTo(x, b_canvas_h);
  }
  // 准备画竖线
  for (var row = 0; row <= grid_rows_small; row++) {
    var y = row * cell_height_small;
    c_context.moveTo(0, y);
    c_context.lineTo(b_canvas_w, y);
  }
  c_context.stroke();

  d_context.lineWidth = 1;
  d_context.strokeStyle = "#dedede";

  // 结束边框描绘
  d_context.beginPath();
  // 准备画横线
  for (var col = 0; col <= grid_cols_small; col++) {
    var x = col * cell_width_small;
    d_context.moveTo(x, 0);
    d_context.lineTo(x, b_canvas_h);
  }
  // 准备画竖线
  for (var row = 0; row <= grid_rows_small; row++) {
    var y = row * cell_height_small;
    d_context.moveTo(0, y);
    d_context.lineTo(b_canvas_w, y);
  }
  d_context.stroke();
}


var isGameRoadMap;
function roadmap (roadmap_arr, _LZTX) {
  var history
  var LZTX = _LZTX;//列数
  var LZTY = 6;//行数
  var arr = [];
  var maxCol = LZTX - 2;
  history = roadmap_arr
  var maps = { "11": "A", "12": "A1", "13": "A2", "14": "A3", "15": "C", "16": "C1", "17": "C2", "18": "C3", "19": "B", "20": "B1", "21": "B2", "22": "B3" };
  var i = 0;
  //初始化数组-->
  while (i < LZTX) {
    arr[i] = [];
    var j = 0;
    while (j < LZTY) {
      arr[i][j] = "0000";
      j++;
    }
    i++;
  }
  i = 0;
  var row = 1;//行
  var col = 0; //列
  var heCount = 0;//和个数
  var leftCount = 0;//左移个数
  var rightBoo = false //是否右移
  var currentRow = 0 //当前行数
  while (i < history.length) {
    if (i == 0) {//第一个
      if (maps[history[i]].substr(0, 1) == "C") {
        history.splice(0, 1);
        i--
      } else {
        arr[col][row - 1] = history[i] + "0" + row;
      }
    } else {
      var p = maps[history[i]].substr(0, 1);//当前露珠类型
      var p1 = maps[history[i - 1]].substr(0, 1);//上一个露珠类型
      if (p != "C") {//当前露珠类型不为和
        heCount = 0;//和的数量初始化
        if (p1 == "C") {//上上一个露珠类型是和
          if (row > 6 && !rightBoo) {//如果行数大于6
            p1 = maps[(arr[col - (row - 6)][5]).substr(0, 2)].substr(0, 1);//取前面列数的第六行的类型
          } else {
            if (rightBoo) {
              p1 = maps[(arr[col + (row - currentRow)][currentRow - 1]).substr(0, 2)].substr(0, 1)
            } else {
              p1 = maps[(arr[col][row - 1]).substr(0, 2)].substr(0, 1);//取去上一行的类型
            }
          }
          if (p != p1) {//如果当前类型和上一个类型不一样
            row = 1;
            leftCount = 0;
            rightBoo = false;
            col++;
            if (col > maxCol) {
              col = maxCol;
              arr.shift();
              arr.push(["0000", "0000", "0000", "0000", "0000", "0000"])
            }
            arr[col][row - 1] = history[i] + "0" + row;   //换列
          } else {
            row++;
            //换行
            if (row > 6 && !rightBoo) {//如果行数大于6
              if (col >= (row - 6) && arr[col - (row - 6)][5] == "0000" && !rightBoo) {   //前面列数的第六行为0000&&列数大于超过的行数&&是否右移
                arr[col - (row - 6)][5] = history[i] + "0" + "6";
                leftCount++;
                rightBoo = false;
              } else {
                rightBoo = true;
                arr[col + (row - 6)][5] = history[i] + "0" + "6";
                var l = 1;
                while (l <= leftCount) {
                  arr[col + l][5] = arr[col - l][5]
                  arr[col - l][5] = "0000";
                  l++;
                }
              }
            } else {
              if (arr[col][row - 1] == "0000" && !rightBoo) {
                currentRow = row;
                arr[col][currentRow - 1] = history[i] + "0" + currentRow;
                rightBoo = false;
              } else {
                arr[col + (row - currentRow)][currentRow - 1] = history[i] + "0" + currentRow;
                rightBoo = true;
              }
            }
          }
        } else {

          if (p != p1) {
            row = 1;
            leftCount = 0;
            rightBoo = false;
            col++;
            if (col > maxCol) {
              col = maxCol;
              arr.shift();
              arr.push(["0000", "0000", "0000", "0000", "0000", "0000"])
            }
            arr[col][row - 1] = history[i] + "0" + row;
          } else {
            row++;
            if (row > 6 && !rightBoo) {
              if (col - (row - 6) >= 0 && arr[col - (row - 6)][5] == "0000" && !rightBoo) {
                arr[col - (row - 6)][5] = history[i] + "0" + "6";
                leftCount++;
                rightBoo = false;
              } else {
                if (col + (row - 6) > maxCol) {
                  var e = 0
                  while (e < (col + (row - 6) - maxCol)) {
                    arr.shift();
                    arr.push(["0000", "0000", "0000", "0000", "0000", "0000"]);
                    e++
                  }
                  col -= col + (row - 6) - maxCol;
                }
                rightBoo = true;
                arr[col + (row - 6)][5] = history[i] + "0" + "6";
                var l = 1;
                while (l <= leftCount) {
                  arr[col + l][5] = arr[col - l][5]
                  arr[col - l][5] = "0000";
                  l++;
                }
              }
            } else {
              if (arr[col][row - 1] == "0000" && !rightBoo) {
                currentRow = row;
                arr[col][currentRow - 1] = history[i] + "0" + currentRow;
                rightBoo = false;
              } else {

                arr[col + (row - currentRow)][currentRow - 1] = history[i] + "0" + currentRow;
                rightBoo = true;
              }
            }
          }
        }
      } else {
        heCount++;
        if (row > 6 && !rightBoo) {
          arr[col - (row - 6)][5] = arr[col - (row - 6)][5].substr(0, 2) + heCount + "6";
        } else {
          if (rightBoo) {
            arr[col + (row - currentRow)][currentRow - 1] = arr[col + (row - currentRow)][currentRow - 1].substr(0, 2) + heCount + currentRow;
          } else {
            arr[col][row - 1] = arr[col][row - 1].substr(0, 2) + heCount + row;

          }
        }
      }
    }
    i++;
  }

  return arr
}

export function initRoadMap (_history, id, boo, boo1, yuce_result) {
  //console.log("露珠显示==>>"+"deskid==>>"+deskId+"||||"+history+"");
  /*img   规定要使用的图像、画布或视频。
          sx  可选。开始剪切的 x 坐标位置。
          sy  可选。开始剪切的 y 坐标位置。
          swidth  可选。被剪切图像的宽度。
          sheight 可选。被剪切图像的高度。
          x   在画布上放置图像的 x 坐标位置。
          y   在画布上放置图像的 y 坐标位置。
          width   可选。要使用的图像的宽度。（伸展或缩小图像）
          height  可选。要使用的图像的高度。（伸展或缩小图像）*/
  isGameRoadMap = boo;
  var icon_size = 84;//图标大小
  var table_size;//表格大小
  var history = _history.slice(0, _history.length);
  if (isGameRoadMap) {

    paintingTypeface(_history, e_desk_context);
    table_size = a_desk_canvas_h / 6;//表格大小
  } else {
    table_size = a_canvas_h / 6;//表格大小
  }
  if (history != null || history != undefined) {
    var col = 0;
    var row = 0;
    var n = 0;
    var jsonarray = [];
    for (var i = 0; i < history.length; i++) {

      var v = history[i];
      if (v == 1) {
        v = 19;
        history[i] = v;
      }
      if (v == 2) {
        v = 11;
        history[i] = v;
      }
      if (v == 3) {
        v = 15;
        history[i] = v;
      }
      if (history[i] == 15) {
        continue;
      }
      if (i > 0) {
        var x = 0, y = 0;
        var v1 = history[i - 1];
        if (v1 == 1) {
          v1 = 19;
          history[i - 1] = v1;
        }
        if (v1 == 2) {
          v1 = 11;
          history[i - 1] = v1;
        }
        if (v1 == 3) {
          v1 = 15;
          history[i - 1] = v1;
        }
        var ss = i - 1; //上个元素
        var duo_he = 1;
        if (json[v].group != json[v1].group) {
          if (json[v].group == 1 || json[v1].group == 1) { //和组
            if (json[v1].group == 1) {

              for (var j = 0; j <= i; j++) {
                duo_he = j + 1;
                ss--; //如果上个元素为1组（和组） 继续--
                var v2 = history[ss];
                if (v2 == 1) {
                  v2 = 19;
                  history[ss] = v2;
                }
                if (v2 == 2) {
                  v2 = 11;
                  history[ss] = v2;
                }
                if (v2 == 3) {
                  v2 = 15;
                  history[ss] = v2;
                }
                if (json[v2] == undefined) {
                  break;
                }
                if (json[v2].group != 1) {
                  if (json[v].group != json[v2].group) {
                    col += table_size;
                    row = 0;
                    n = 0;
                  } else {
                    n++;
                    row = table_size * n;
                  }
                  break;
                }
              }
            } else {

              if (json[v].group == 0) {
                x = json[15][v1][duo_he].coor.x;
                y = json[15][v1][duo_he].coor.y;
              } else if (json[v].group == 2) {
                x = json[15][v1][duo_he].coor.x;
                y = json[15][v1][duo_he].coor.y;
              } else if (json[v].group == 1) {
                x = json[15][v1][duo_he].coor.x;
                y = json[15][v1][duo_he].coor.y;
              }

            }
          } else {
            col += table_size;
            row = 0;
            n = 0;
          }
        } else {
          if (json[v].group == 1) {

            for (var j = 0; j <= i; j++) {

              duo_he++;
              ss--; //如果上个元素为1组（和组） 继续--
              var v2 = history[ss];
              if (json[v2].group != 1) {
                break;
              }
            }
            x = json[15][v2][duo_he].coor.x;
            y = json[15][v2][duo_he].coor.y;
          } else {
            n++;
            row = table_size * n;
          }
        }
        var arr = {};
        if (json[v].group == 1) {
          arr = {
            "col": col,
            "row": row,
            "x": x,
            "y": y,
            "group": json[v].group
          };
        } else {
          arr = {
            "col": col,
            "row": row,
            "x": json[v].coor.x,
            "y": json[v].coor.y,
            "group": json[v].group
          };
        }

        jsonarray.push(arr);
      } else {
        if (v > 14 && v < 19) {
          continue;
        }
        var arr = {
          "col": 0,
          "row": 0,
          "x": json[v].coor.x,
          "y": json[v].coor.y,
          "group": json[v].group
        };
        jsonarray.push(arr);
      }

    }
    if (boo) {
      drawImage(boo, boo1, a_desk_context, jsonarray, table_size, icon_size, roadmap(history, 64), b_desk_context, c_desk_context, d_desk_context);
    } else {
      if (gameId) {
        if (curr_screen) {
          drawImage(boo, boo1, e_contexts[id], jsonarray, table_size, icon_size, roadmap(history, 17));
        } else {
          drawImage(boo, boo1, a_contexts[id], jsonarray, table_size, icon_size, roadmap(history, 42), b_contexts[id], c_contexts[id], d_contexts[id]);
        }
      } else {
        drawImage(boo, boo1, a_contexts[id], jsonarray, table_size, icon_size, roadmap(history, 32), b_contexts[id], c_contexts[id], d_contexts[id], id, yuce_result);
      }

    }
  }
}

//画大圆圈
function drawImage (boo, boo1, a_context, jsonarray, table_size, icon_size, roadmaps, b_context, c_context, d_context, id, yuce_result) {
  var row_array = []; //列的个数
  var tab_size_small;
  var count;
  if (boo) {
    tab_size_small = b_desk_canvas_h / 6;
  } else {
    tab_size_small = b_canvas_h / 6;
  }

  var hollowArray = []; //保存小圆圈数组
  var solid_array = []; //保存小实心圆圈数组
  var slash_array = []; //保存小斜线数组
  var z_yuce = [0, 0, 0];
  var x_yuce = [0, 0, 0];
  var img = new Image();
  //var yuce_result = {};
  img.src = src;
  img.onload = function () {
    for (var i in jsonarray) {
      var col = jsonarray[i].col;
      var row = jsonarray[i].row;
      var col_array = [];
      var group = jsonarray[i].group;
      var type;
      //组装列的个数
      if (group != 1) {
        if (i > 0) {
          var his_col = jsonarray[i - 1].col;
          if (col > his_col) {
            col_array.push(row / table_size + 1);
            row_array.push(col_array);
          } else {
            row_array[row_array.length - 1].push(row / table_size + 1);
          }
        } else {
          col_array.push(row / table_size + 1);
          row_array.push(col_array);
        }
      }

      if (row_array.length > 2 || (row_array.length > 1 && row_array[1].length > 1) && group != 1) {
        var len = row_array.length - 1;
        var k = 0, v = 0;
        var c = 0;
        if (row_array[len].length >= 2) {
          k = row_array[len].length - 1;
          v = row_array[len - 1].length;

        } else {
          k = row_array[len - 1].length;
          v = row_array[len - 2].length;
        }
        c = row_array[len].length;
        // 
        if (k == v && row == 0) {
          type = 11;
        } else if (k != v && row > 0) {
          type = 11;

        } else {
          type = 19;

        }
        if (k == c) {
          if (group == 0) {
            z_yuce[0] = 2
            x_yuce[0] = 1
          } else {
            z_yuce[0] = 1
            x_yuce[0] = 2
          }
        } else {
          if (group == 0) {
            z_yuce[0] = 1
            x_yuce[0] = 2
          } else {
            z_yuce[0] = 2
            x_yuce[0] = 1
          }
        }
        hollowArray.push(type);

      }
      //画实心圆

      if (col / table_size >= 3 && i > 2 && group != 1) {
        //实心圆数组
        var len = row_array.length - 1;
        var k = 0, v = 0;
        var c = 0, l = 0;
        if (row_array[len].length >= 2) {
          k = row_array[len].length - 1;
          v = row_array[len - 2].length;
        } else {
          k = row_array[len - 1].length;
          v = row_array[len - 3].length;
        }
        c = row_array[len].length;
        l = row_array[len - 2].length;
        // console.log("row",row,"l",l,"c",c)
        if (k == v && row == 0) {
          type = 11;
        } else if (k != v && row > 0) {
          //实际 预测 上一个 相等
          type = 11;
        } else {
          type = 19;
        }
        if (l == c) {
          if (group == 0) {
            z_yuce[1] = 2
            x_yuce[1] = 1
          } else {
            z_yuce[1] = 1
            x_yuce[1] = 2
          }
        } else {
          if (group == 0) {
            z_yuce[1] = 1
            x_yuce[1] = 2
          } else {
            z_yuce[1] = 2
            x_yuce[1] = 1
          }
        }
        solid_array.push(type);
      }

      //画斜线
      if (col / table_size >= 4 && i > 4 && group != 1) {
        //实心圆数组
        var len = row_array.length - 1;
        var k = 0, v = 0;
        var c = 0, l = 0;
        if (row_array[len].length >= 2) {
          k = row_array[len].length - 1;
          v = row_array[len - 3].length;
        } else {
          k = row_array[len - 1].length;
          v = row_array[len - 4].length;
        }
        c = row_array[len].length;
        l = row_array[len - 3].length;
        if (k == v && row == 0) {
          type = 11;
        } else if (k != v && row > 0) {
          //实际 预测 上一个 相等
          type = 11;
        } else {
          type = 19;
        }
        if (l == c) {
          if (group == 0) {
            z_yuce[2] = 2
            x_yuce[2] = 1
          } else {
            z_yuce[2] = 1
            x_yuce[2] = 2
          }
        } else {
          if (group == 0) {
            z_yuce[2] = 1
            x_yuce[2] = 2
          } else {
            z_yuce[2] = 2
            x_yuce[2] = 1
          }
        }
        slash_array.push(type);
      }

    }
    //console.log("z_yuce",z_yuce,x_yuce);
    if (yuce_result) {
      yuce_result[id] = yuCe(z_yuce, x_yuce, id)
      //console.log(yuce_result)
    }


    var c = 0;
    var r = 0;
    var LZtype = 0;
    var heCount = 0;
    var obj;
    for (c in roadmaps) {
      for (r in roadmaps[c]) {
        if (!a_context) { return }
        a_context.clearRect(c * table_size + (table_size * 0.05), r * table_size + (table_size * 0.05), table_size * 0.9, table_size * 0.9)
        if (roadmaps[c][r] != "0000") {
          LZtype = parseInt(roadmaps[c][r].substr(0, 2));
          heCount = parseInt(roadmaps[c][r].substr(2, 1));
          if (heCount == 0) {
            obj = json[LZtype].coor;
          } else {
            obj = json["15"][LZtype][heCount].coor;

          }
          if (boo) {
            a_context.drawImage(img, obj.x, obj.y, icon_size, icon_size, c * table_size, r * table_size, table_size, table_size);
          } else {
            a_context.drawImage(img, obj.x, obj.y, icon_size, icon_size, c * table_size + (table_size * 0.05), r * table_size + (table_size * 0.05), table_size * 0.9, table_size * 0.9);
          }

        }
      }
    }


    if (boo) {
      count = 28
    } else {
      if (gameId) {
        count = 17
      } else {
        count = 13
      }
    }
    if (!b_context) { return };
    drawSmallRoadMap(boo, b_context, tab_size_small, icon_size, roadmap(hollowArray, count), 0);
    drawSmallRoadMap(boo, c_context, tab_size_small, icon_size, roadmap(solid_array, count), 1);
    drawSmallRoadMap(boo, d_context, tab_size_small, icon_size, roadmap(slash_array, count), 2);
    // return yuce_result
  }

}
//画小露珠
function drawSmallRoadMap (boo, context, table_size, icon_size, roadmap, type) {
  var drawing_size = table_size; //画图大小
  var img = new Image();
  img.src = src;
  var c = 0;
  var r = 0;
  var LZtype = 0;
  var obj;

  for (c in roadmap) {
    for (r in roadmap[c]) {
      context.clearRect(c * drawing_size, r * drawing_size, drawing_size - 1, drawing_size - 1);
      if (roadmap[c][r] != "0000") {
        LZtype = parseInt(roadmap[c][r].substr(0, 2));
        switch (type) {
          case 1: {
            if (LZtype == 11) {
              LZtype = 0
            } else {
              LZtype = 2
            }
            break;
          };
          case 2: {
            if (LZtype == 11) {
              LZtype = 3
            } else {
              LZtype = 4
            }
            break;
          };
          default: {
            break;
          };
        };
        obj = json[LZtype].coor;
        if (boo) {
          context.drawImage(img, obj.x, obj.y, icon_size, icon_size, c * drawing_size, r * drawing_size, drawing_size - 1, drawing_size - 1);
        } else {
          context.drawImage(img, obj.x, obj.y, icon_size, icon_size, c * drawing_size, r * drawing_size, drawing_size - 1, drawing_size - 1);
        }

      }
    }
  }
}
//画字
function paintingTypeface (history, context) {
  var icon_size = 84; //图标大小
  var table_size = e_desk_canvas_h / 6; //表格大小
  // 描绘边框
  var grid_rows = 6;
  var img = new Image();
  img.src = src;
  img.onload = function () {
    for (var h in history) {

      context.clearRect(parseInt(h / grid_rows) * table_size + (table_size * 0.05), h % grid_rows * table_size + (table_size * 0.05), table_size * 0.9, table_size * 0.9);
      if (h == (history.length - 1)) {
        context.clearRect(parseInt(history.length / grid_rows) * table_size + (table_size * 0.05), history.length % grid_rows * table_size + (table_size * 0.05), table_size * 0.9, table_size * 0.9);
      }
      var numberNo = history[h];
      var col = paintingTypefaceJson[numberNo].col;
      var row = paintingTypefaceJson[numberNo].row;
      context.drawImage(img, col, row, icon_size, icon_size, parseInt(h / grid_rows) * table_size + (table_size * 0.05), h % grid_rows * table_size + (table_size * 0.05), table_size * 0.9, table_size * 0.9);
    }
  }
  //paintingTypefaceJson
}

var yuceTo = { 0: 'J0TDv', 1: '_3IB0p', 2: '_3Ok4O' }//hong  lan
function yuCe (z_yuce, x_yuce, id) {
  return {
    zhuang_one: yuceTo[z_yuce[0]],
    zhuang_two: yuceTo[z_yuce[1]],
    zhuang_three: yuceTo[z_yuce[2]],
    xian_one: yuceTo[x_yuce[0]],
    xian_two: yuceTo[x_yuce[1]],
    xian_three: yuceTo[x_yuce[2]],
  }
  // $('.zhuang_one').removeClass('_1KtDl _2cLUt').addClass(yuceTo[z_yuce[0]])
  // $('.zhuang_two').removeClass('_1KtDl _2cLUt').addClass(yuceTo[z_yuce[1]])
  // $('.zhuang_three').removeClass('_1KtDl _2cLUt').addClass(yuceTo[z_yuce[2]])

  // $('.xian_one').removeClass('_1KtDl _2cLUt').addClass(yuceTo[x_yuce[0]])
  // $('.xian_two').removeClass('_1KtDl _2cLUt').addClass(yuceTo[x_yuce[1]])
  // $('.xian_three').removeClass('_1KtDl _2cLUt').addClass(yuceTo[x_yuce[2]])
}

var json = {
  "11": {
    "coor": { "x": 1764, "y": 84 },
    "group": 0
  },
  "12": {
    "coor": { "x": 0, "y": 336 },
    "group": 0
  },
  "13": {
    "coor": { "x": 336, "y": 252 },
    "group": 0
  },
  "14": {
    "coor": { "x": 1680, "y": 336 },
    "group": 0
  },
  "15": {
    "11": {
      "1": { "coor": { "x": 840, "y": 168 } },
      "2": { "coor": { "x": 1008, "y": 168 } },
      "3": { "coor": { "x": 1176, "y": 168 } },
      "4": { "coor": { "x": 1344, "y": 168 } },
      "5": { "coor": { "x": 1512, "y": 168 } },
      "6": { "coor": { "x": 1680, "y": 168 } },
      "7": { "coor": { "x": 1848, "y": 168 } }
    },
    "12": {
      "1": { "coor": { "x": 168, "y": 336 } },
      "2": { "coor": { "x": 336, "y": 336 } },
      "3": { "coor": { "x": 504, "y": 336 } },
      "4": { "coor": { "x": 672, "y": 336 } },
      "5": { "coor": { "x": 840, "y": 336 } },
      "6": { "coor": { "x": 1008, "y": 336 } },
      "7": { "coor": { "x": 1176, "y": 336 } }
    },
    "13": {
      "1": { "coor": { "x": 504, "y": 252 } },
      "2": { "coor": { "x": 672, "y": 252 } },
      "3": { "coor": { "x": 840, "y": 252 } },
      "4": { "coor": { "x": 1008, "y": 252 } },
      "5": { "coor": { "x": 1176, "y": 252 } },
      "6": { "coor": { "x": 1344, "y": 252 } },
      "7": { "coor": { "x": 1512, "y": 252 } }
    },
    "14": {
      "1": { "coor": { "x": 1848, "y": 336 } },
      "2": { "coor": { "x": 0, "y": 420 } },
      "3": { "coor": { "x": 168, "y": 420 } },
      "4": { "coor": { "x": 336, "y": 420 } },
      "5": { "coor": { "x": 504, "y": 420 } },
      "6": { "coor": { "x": 672, "y": 420 } },
      "7": { "coor": { "x": 840, "y": 420 } }
    },
    "19": {
      "1": { "coor": { "x": 1512, "y": 420 } },
      "2": { "coor": { "x": 1680, "y": 420 } },
      "3": { "coor": { "x": 1848, "y": 420 } },
      "4": { "coor": { "x": 0, "y": 504 } },
      "5": { "coor": { "x": 168, "y": 420 } },
      "6": { "coor": { "x": 336, "y": 420 } },
      "7": { "coor": { "x": 504, "y": 504 } }
    },
    "20": {
      "1": { "coor": { "x": 840, "y": 588 } },
      "2": { "coor": { "x": 1008, "y": 588 } },
      "3": { "coor": { "x": 1176, "y": 588 } },
      "4": { "coor": { "x": 1344, "y": 588 } },
      "5": { "coor": { "x": 1512, "y": 588 } },
      "6": { "coor": { "x": 1680, "y": 588 } },
      "7": { "coor": { "x": 1848, "y": 588 } }
    },
    "21": {
      "1": { "coor": { "x": 1176, "y": 504 } },
      "2": { "coor": { "x": 1344, "y": 504 } },
      "3": { "coor": { "x": 1512, "y": 504 } },
      "4": { "coor": { "x": 1680, "y": 504 } },
      "5": { "coor": { "x": 1848, "y": 504 } },
      "6": { "coor": { "x": 0, "y": 588 } },
      "7": { "coor": { "x": 168, "y": 588 } }
    },
    "22": {
      "1": { "coor": { "x": 504, "y": 672 } },
      "2": { "coor": { "x": 672, "y": 672 } },
      "3": { "coor": { "x": 840, "y": 672 } },
      "4": { "coor": { "x": 1008, "y": 672 } },
      "5": { "coor": { "x": 1176, "y": 672 } },
      "6": { "coor": { "x": 1344, "y": 672 } },
      "7": { "coor": { "x": 1512, "y": 672 } }
    },
    "group": 1
  },
  "16": {
    "coor": { "x": 84, "y": 84 },
    "group": 1
  },
  "17": {
    "coor": { "x": 84, "y": 84 },
    "group": 1
  },
  "18": {
    "coor": { "x": 84, "y": 84 },
    "group": 1
  },
  "19": {
    "coor": { "x": 1848, "y": 84 },
    "group": 2
  },
  "20": {
    "coor": { "x": 672, "y": 588 },
    "group": 2
  },
  "21": {
    "coor": { "x": 1008, "y": 504 },
    "group": 2
  },
  "22": {
    "coor": { "x": 336, "y": 672 },
    "group": 2
  },
  "23": {
    "coor": { "x": 314, "y": 302 },
    "group": 2
  },
  "0": {
    "coor": { "x": 0, "y": 168 },
    "group": 0
  },
  "2": {
    "coor": { "x": 84, "y": 168 },
    "group": 2
  },
  "3": {
    "coor": { "x": 252, "y": 168 },
    "group": 0
  },
  "4": {
    "coor": { "x": 336, "y": 168 },
    "group": 2
  }
};
//触发的小空心
var paintingTypefaceJson = {
  "1": {
    "col": 1344, "row": 0
  },
  "2": {
    "col": 1764, "row": 0
  },
  "3": {
    "col": 84, "row": 84
  },
  "11": {
    "col": 1260, "row": 0
  },
  "12": {
    "col": 1512, "row": 0
  },
  "13": {
    "col": 1428, "row": 0
  },
  "14": {
    "col": 1596, "row": 0
  },
  "15": {
    "col": 84, "row": 84
  },
  "16": {
    "col": 336, "row": 84
  },
  "17": {
    "col": 252, "row": 84
  },
  "18": {
    "col": 420, "row": 84
  },
  "19": {
    "col": 1680, "row": 0
  },
  "20": {
    "col": 1932, "row": 0
  },
  "21": {
    "col": 1848, "row": 0
  },
  "22": {
    "col": 0, "row": 84
  },
  "23": {
    "col": 18, "row": 18
  },
  "24": {
    "col": 54, "row": 0
  }
};	