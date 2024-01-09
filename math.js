root = (a, b, c)=> {
  return Math.sqrt((b ** 2)-(4 * a * c));
}

x1 = (a, b, c)=> {
  return((-b + root(a, b, c)) / (2 * a))
}


x2 = (a, b, c)=> {
  return(-b - root(a, b, c)) / (2 * a)
}

solve_equation = (a, b, c)=> {
  return [x1(a, b, c), x2(a, b, c)];
}


solve_equation2 = (a,b,c)=> {
  return [x1(a, b, c), x2(a, b, c)];
}

console.log(solve_equation(1, 5, 6));
console.log(solve_equation2(5, 1, 6));
;
