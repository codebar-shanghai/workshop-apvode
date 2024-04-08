#include <stdio.h>
#include <fcntl.h>
#include <unistd.h>

int main() {
	// Attempt to open /dev/null
	int fd = open("/dev/null", O_RDWR);
	printf("The file discriptor is %d\n", fd);
	return 0;
}

