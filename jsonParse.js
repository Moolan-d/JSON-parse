
var json

var i=0
function jsonParse(str){
   json=str
    i=0
 
  return parse()
}
function parse() {
debugger
  var currtS = json[i]

  if (currtS == '{') {
    return parseObject()
  }
  if (currtS == '[') {
    return parseArray()
  }
  if (currtS == '"') {
    return parseString()
  }
  if (currtS == 't') {
    return parseTrue()
  }
  if (currtS == 'f') {
    return parseFalse()
  }
  if (currtS=='n') {
    return parseNull()
  }
  if (isNum(currtS)) {
    return parseNumber()
  }

}

//解析数组

function parseArray() {

  i++

  var result = []
  var value

  if (json[i] == ']') {
    return result
  } else while (true) {
    value = parse()
    result.push(value)
    if (json[i] == ',') {
      i++
      continue
    }
    if (json[i] == ']') {
      break
    }

  }
  i++
  return result
}

//解析对象
function parseObject() {
  i++
  var result = {}
  var key
  var value
  if (json[i] == '}') {
    return result
  } else
    while (true) {
      key = parseString()
      i++
      value = parse()

      result[key] = value
      if (json[i] == ',') {
        i++
        continue
      }
      if (json[i == '}']) {
        break
      }
    }

  i++
  return result
}

//解析string
function parseString() {
  var startIndex = i
  var endIndex = json.indexOf('"', startIndex + 1) //从第零项之后开始
  var string = json.slice(startIndex + 1, endIndex) //

  i = endIndex + 1
  return string
}

//解析parseNumber
function parseNumber() {
  var startIndex = i
  for (var j = startIndex + 1;; j++) {
    var chart = json[j]
    if (!isNum(chart)) {
      break
    } //找出j(结尾项)
  }
  var numberSum = json.slice(startIndex, j)

  i = j
  return parseInt(numberSum)

}
//解析parseTrue
function parseTrue() {
  i = i + 4
  return true

}
//解析parseFalse
function parseFalse() {
  i = i + 5 //必须放在前边，不然return之后就不执行后面的操作了
  return false
}

//解析parseNull
function parseNull() {
  i = i + 4
  return null
}


//判断是否是数字1
function isDigit(chart) {
  if (!chart) {
    return false
  } //为什么
  var codeOf0 = '0'.charCodeAt(0)
  var codeOf9 = '9'.charCodeAt(0)
  var chartCode = chart.charCodeAt(0)
  if (chartCode <= codeOf9 && chartCode >= codeOf0) {
    return true
  } else {
    return false
  }
}

//判断是否是数字2
function isNum(chart){
  // if (!chart) {
  //   return false
  // }
  switch (chart){
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0':
    return true
    break;
    default:
    return false
  }
}
