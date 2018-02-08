/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/ 


const twoSum = (nums, target) => {
  let origArr = nums.slice();
  while(nums.length) {
    let el1 = nums.shift();
    for(let i = 0; i < nums.length; i++) {
      if(el1 + nums[i] === target) {
        let el2 = nums[i]
        
        if(origArr.indexOf(el1) === origArr.indexOf(el2)) {
          return [origArr.indexOf(el1), origArr.lastIndexOf(el2)]
        } else {
          return [origArr.indexOf(el1), origArr.indexOf(el2)]
        }
      }
    }
  }
}