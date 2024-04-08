#include <stdio.h> // printf

int main() {
	int x;
	printf("The size of x is %ld byte(s)\n", sizeof(int));
	printf("The address of x is %p\n", &x);
	return 0;
}

