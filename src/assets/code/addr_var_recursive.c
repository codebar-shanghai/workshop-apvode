#include <stdio.h>
#include <stdlib.h>
#define VAR_SIZE 0x10
#define MAX_FRAME 5

int g_count = 0;

void foo() {
	if (g_count == MAX_FRAME)
		return;

	char s1[VAR_SIZE], *s2;
	s2 = (char *) malloc(VAR_SIZE * sizeof(char));
	printf("=== %d ===\n", g_count);
	printf("The address of s1 is             %p\n", &s1);
	printf("The address of s2 is             %p\n", &s2);
	printf("The address that s2 points to is %p\n",  s2);

	g_count++;
	foo();
	free(s2);
}

int main() {
	foo();
	return 0;
}

