
// Test Matcher

// toBe() : 숫자, 문자와 같은 객체가 아닌 기본형 값 비교
test("1 is 1", () => {
    expect(1).toBe(1)
  })

// toEqual() : 객체값 비교
function getUser(id) {
    return {
      id,
      email: `user${id}@test.com`,
    }
  }

test("return a user object", () => {
    expect(getUser(1)).toEqual({
      id: 1,
      email: `user1@test.com`,
    })
  })

// toBeTruthy()
test("number 0 is falsy but string 0 is truthy", () => {
    expect(0).toBeFalsy()
    expect("0").toBeTruthy()
  })

// toHaveLength(), toContain() : 배열 길이, 특정 원소 존재 여부
test("array", () => {
    const colors = ["Red", "Yellow", "Blue"]
    expect(colors).toHaveLength(3)
    expect(colors).toContain("Yellow")
    expect(colors).not.toContain("Green")
  })

// toMatch() : 정규식 표현 기반
test("string", () => {
    expect(getUser(1).email).toBe("user1@test.com")
    expect(getUser(2).email).toMatch(/.*test.com$/)
  })

// toThrow() : 예외 발생 여부