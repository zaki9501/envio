import assert from "assert";
import { 
  TestHelpers,
  Pingu_Initialized
} from "generated";
const { MockDb, Pingu } = TestHelpers;

describe("Pingu contract Initialized event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for Pingu contract Initialized event
  const event = Pingu.Initialized.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("Pingu_Initialized is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await Pingu.Initialized.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualPinguInitialized = mockDbUpdated.entities.Pingu_Initialized.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedPinguInitialized: Pingu_Initialized = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      version: event.params.version,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualPinguInitialized, expectedPinguInitialized, "Actual PinguInitialized should be the same as the expectedPinguInitialized");
  });
});
