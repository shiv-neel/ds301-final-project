'''
Problem statement: Given a string, find the LENGTH of the longest substring with at most k different types of characters.

@param string[] s
@param int k
@return int length
'''

def longestSubstringLength(s: str, k: int):
    l, r = 0, 0
    longestLength = - 2 ** 31
    currStrLen = 0
    charFrequency = {} # use a hashmap instead of currStr to avoid the O(n) operation 
    while r < len(s): 
        if s[r] not in dic: # O(1)
            dic[s[r]] = 1
        if len(dic.keys()) <= k: #O(1)
            dic[s[r]] += 1
            currStrLen += 1
        else:
            longestLength = max(longestLength, currStrLen)
            l += 1
            currStrLen = 0
            dic = {}
        r += 1
    return longestLength

print(longestSubstringLength('cbbebi', 3))


