function e(n) 
{
  // Set equal to 1 to avoid doing the work for 0
  let result = 1;
  let factorial = 1;

  // Goes from 1 to n and factorial is progressively changed
  // to avoid the repeated work of calculating the factorial again.
  for(let iteration = 1; iteration <= n; iteration++) 
  {
    factorial *= iteration;
    result += (1.0 /factorial);
  }
  return result;
}
