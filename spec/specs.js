describe('findReplace', function() {
  it("inputs a word and outputs that word", function() {
    expect(findReplace("Micah")).to.equal("Micah");
  })

  it("inputs a string and outputs that string", function() {
    expect(findReplace("Hi, My name is Micah.")).to.equal("Hi, My name is Micah.");
  })

})
