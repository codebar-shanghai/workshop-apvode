#include <stdio.h>

int main() {
	int x, *p;

	x = 42;
	p = &x;

	printf("The address of x is %p\n", &x);
	printf("The address of p is %p\n", &p);
	printf("The value   of p is %p\n", p);
	printf("The value p points to is %d\n", *p);

	return 0;
}

