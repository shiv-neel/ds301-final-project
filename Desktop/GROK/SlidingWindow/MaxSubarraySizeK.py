def maxSubarraySizeK(arr, k):
    sums = [sum(arr[:k])]
    temp = sums[0]
    for i in range(k, len(arr)):
        temp += arr[i]
        temp -= arr[i - k]
        sums.append(temp)
    return max(sums)


Input = [2, 1, 5, 1, 3, 2]
k = 3
Output = 9
print(maxSubarraySizeK(Input, k), Output)