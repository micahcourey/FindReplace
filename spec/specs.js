describe('findReplace', function() {
  it("inputs a word and outputs that word", function() {
    expect(findReplace("Micah", "Micah", "Micah")).to.equal("Micah");
  })

  it("inputs a string and outputs that string", function() {
    expect(findReplace("Hi, My name is Micah.", "Hi, My name is Micah.", "Hi, My name is Micah.")).to.equal("Hi, My name is Micah.");
  })

  it("inputs a word and a replacement word and outputs the replacement word", function() {
    expect(findReplace("Micah", "Micah", "Courey")).to.equal("Courey");
  })

  it("inputs a string, a search word and a  replacement word and outputs the replacement word in the string", function() {
    expect(findReplace("Hi, My name is Micah.", "Micah", "Heisendurrrrg")).to.equal("Hi, My name is Heisendurrrrg.");
  })

  it("inputs a string, a search word and a  replacement word and outputs multiple instances or the replacement word in the string", function() {
    expect(findReplace("Hi, My name is Micah. My full name is Micah Courey", "Micah", "Heisendurrrrg")).to.equal("Hi, My name is Heisendurrrrg. My full name is Heisendurrrrg Courey");
  })

})
