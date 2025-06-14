import assert from "assert";
import { 
  TestHelpers,
  Ambiant_AuthorityTransfer
} from "generated";
const { MockDb, Ambiant } = TestHelpers;

describe("Ambiant contract AuthorityTransfer event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for Ambiant contract AuthorityTransfer event
  const event = Ambiant.AuthorityTransfer.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("Ambiant_AuthorityTransfer is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await Ambiant.AuthorityTransfer.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualAmbiantAuthorityTransfer = mockDbUpdated.entities.Ambiant_AuthorityTransfer.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedAmbiantAuthorityTransfer: Ambiant_AuthorityTransfer = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      authority: event.params.authority,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualAmbiantAuthorityTransfer, expectedAmbiantAuthorityTransfer, "Actual AmbiantAuthorityTransfer should be the same as the expectedAmbiantAuthorityTransfer");
  });
});
