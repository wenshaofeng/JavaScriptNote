/* 反转字符串中的单词 III
给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

示例 1:

输入: "Let's take LeetCode contest"
输出: "s'teL ekat edoCteeL tsetnoc" 
注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。 */

var reverseWords = function(s) {
    let arr = s.split(' ')  //保存单词
    let result = arr.map(item =>{ //遍历每个单词，反向拼接
        return item.split("").reverse().join('')
    })
    return result.join(' ') // 拼接单词成句子
};

