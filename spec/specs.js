describe('findReplace', function() {
  it("input words and outputs only the replacement word", function() {
    expect(findReplace("Micah", "Micah", "Courey")).to.equal("Courey");
  })

  it("inputs a string and outputs the replacement string", function() {
    expect(findReplace("Hi, My name is Micah.", "Hi, My name is Micah.", "Hi, My name is Micah Courey.")).to.equal("Hi, My name is Micah Courey.");
  })

  it("inputs a word and a replacement word and outputs the replacement word", function() {
    expect(findReplace("Micah", "Micah", "Courey")).to.equal("Courey");
  })

  it("inputs a string, a search word and a replacement word and outputs the replacement word in the string", function() {
    expect(findReplace("Hi, My name is Micah.", "Micah", "Heisendurrrrg")).to.equal("Hi, My name is Heisendurrrrg.");
  })

  it("inputs a string, a search word and a replacement word and outputs the string with multiple replacement instances of the replacement word in the string", function() {
    expect(findReplace("Hi, My name is Micah. My full name is Micah Courey", "Micah", "Heisendurrrrg")).to.equal("Hi, My name is Heisendurrrrg. My full name is Heisendurrrrg Courey");
  })

  it("inputs a string with a search word and a replacement word and outputs multiple instances or the replacement word even when replacement word has case diffences and puncuation attached to the word", function() {
    expect(findReplace("Hi, My name is Micah. My full name is micah Courey. You can call me mIcAh!", "Micah", "Heisendurrrrg")).to.equal("Hi, My name is Heisendurrrrg. My full name is Heisendurrrrg Courey. You can call me Heisendurrrrg!");
  })

  it("inputs a string and a word that doesn't appear in the string and replacement and outputs a message telling them it doesn't appear", function() {
    expect(findReplace("Hi, My name is Micah.", "Hello", "Hey")).to.equal("This word does not appear in your text");
  })

});
