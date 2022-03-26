'''
Problem Statement:
return len of smallest subarray that has a sum greater than k

@param int[] nums, int k
@return int minLen
'''

def smallestSubarrayWithGreatestSum(nums, k):
    minLen = 2 ** 31
    windowSum = 0
    l, r, n = 0, 0, len(nums)
    while r < n:
        windowSum += nums[r]
        while windowSum >= k: # while subarray greater than k, we can try shrinking it bc we care about length, not sumsize
            minLen = min(minLen, r-l+1) # storing current size of subarray b4 shrinkage
            windowSum -= nums[l] # reflect shrinking for windowSum
            l += 1 # reflect shrinking for left pointer
        r += 1
    return minLen if minLen < 2 ** 31 else 0

Input = [3, 4, 1, 1, 6]
S = 8
Output = 3

print(smallestSubarrayWithGreatestSum(Input, S), Output)