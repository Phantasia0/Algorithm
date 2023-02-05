//백트래킹
//모든 경우의 수를 탐색하는 알고리즘
//DFS나 BFS를 이용할 수 있다
//효율을 위해 탐색하지 않아도 되는 곳을 미리 막는 것을 가지치기 라고 한다
//자바스크립트는 DFS를 구현할 경우 스택을 이용하는 것이 좋다
//코딩테스트에서는 이를 고려하여 재귀로 작성해도 풀 수 있도록 문제를 제출하는 경우도 있다
//탐색에서 순환이 발생할 수 있다면 BFS를 이용하는 것이 편하다

//가지치기를 얼마나 잘하느냐가 효율성을 결정한다
//우선 모든 경우의 수를 찾을 수 있도록 코딩
//이후 문제에서 특정한 조건! 을 만족하는 것만 탐색하고 나머지는 탐색하지 않도록 조건문 작성
//즉, 절대로 답이 될 수 없는 것은 탐색을 종료