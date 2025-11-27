// Verification script to check all procurement context calculations
const { comparisons, BOM_TOTAL_COST } = require('./src/data/comparisons.js');

const inconsistencies = [];

comparisons.forEach((item) => {
  const calculatedQuantity = Math.floor(BOM_TOTAL_COST / item.cost);

  // Extract number from procurement context
  const procurementText = item.procurementContext;

  // Try to find numbers in the procurement context
  const numberMatches = procurementText.match(/\d{1,3}(,\d{3})*(\.\d+)?/g);

  if (numberMatches) {
    numberMatches.forEach(match => {
      const numberInContext = parseInt(match.replace(/,/g, ''));

      // Check if this number is close to our calculated quantity
      // Allow for rounding differences
      if (Math.abs(numberInContext - calculatedQuantity) <= 1) {
        // This is probably the quantity, check if it matches exactly
        if (numberInContext !== calculatedQuantity) {
          inconsistencies.push({
            id: item.id,
            name: item.name,
            cost: item.cost,
            calculated: calculatedQuantity,
            inContext: numberInContext,
            context: procurementText
          });
        }
      }
    });
  }
});

if (inconsistencies.length === 0) {
  console.log('✅ All calculations are consistent!');
} else {
  console.log(`❌ Found ${inconsistencies.length} inconsistencies:\n`);
  inconsistencies.forEach((item) => {
    console.log(`\n📍 ${item.id} (${item.name})`);
    console.log(`   Cost: $${item.cost.toLocaleString()}`);
    console.log(`   Calculated: ${item.calculated.toLocaleString()}`);
    console.log(`   In context: ${item.inContext.toLocaleString()}`);
    console.log(`   Context: ${item.context.substring(0, 100)}...`);
  });
}

console.log(`\n📊 Total items checked: ${comparisons.length}`);
