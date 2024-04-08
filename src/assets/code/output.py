print("This message is logged to stdout")

import sys
sys.stderr.write("This error is logged to stderr\n")
print("This error is logged to stderr", file=sys.stderr)
