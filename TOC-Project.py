def is_valid_expression(expr):
    i = 0
    def parse_E():
        nonlocal i
        if not parse_T():
            return False
        while i < len(expr) and expr[i] in '+-':
            i += 1
            if not parse_T():
                return False
        return True

    def parse_T():
        nonlocal i
        if not parse_F():
            return False
        while i < len(expr) and expr[i] in '*/':
            i += 1
            if not parse_F():
                return False
        return True

    def parse_F():
        nonlocal i
        if i < len(expr) and expr[i] == '(':
            i += 1
            if not parse_E():
                return False
            if i < len(expr) and expr[i] == ')':
                i += 1
                return True
            return False
        return parse_number()

    def parse_number():
        nonlocal i
        start = i
        while i < len(expr) and expr[i].isdigit():
            i += 1
        return i > start

    expr = expr.replace(" ", "")  # remove whitespace
    if not expr:
        return False
    return parse_E() and i == len(expr)
