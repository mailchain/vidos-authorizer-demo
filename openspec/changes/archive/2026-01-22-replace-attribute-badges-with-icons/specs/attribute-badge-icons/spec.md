# Spec: Attribute Badge Icons

## ADDED Requirements

### Requirement: Icon-Based Attribute Indicators

The attribute selector SHALL replace text badges with icon indicators for attribute metadata.

#### Scenario: Required for issuance indicator
**Given** an attribute has `requiredForIssuance: true`  
**When** the attribute is displayed in the attributes list  
**Then** an asterisk icon (`Asterisk` from lucide-react) SHALL be shown to the right of the attribute name  
**And** the icon SHALL have an `aria-label` of "Required for issuance"  
**And** the icon SHALL use orange/amber color (`text-orange-600` or `text-amber-600`)  
**And** the icon SHALL be 16px in size

#### Scenario: Always disclosed indicator
**Given** an attribute has `nonSelectivelyDisclosable: true`  
**When** the attribute is displayed in the attributes list  
**Then** a lock icon (`Lock` from lucide-react) SHALL be shown to the right of the attribute name  
**And** the icon SHALL have an `aria-label` of "Always disclosed"  
**And** the icon SHALL use muted foreground color (`text-muted-foreground`)  
**And** the icon SHALL be 16px in size

#### Scenario: No indicator for standard attributes
**Given** an attribute has both `requiredForIssuance: false` (or undefined) and `nonSelectivelyDisclosable: false` (or undefined)  
**When** the attribute is displayed in the attributes list  
**Then** no icon indicator SHALL be shown

#### Scenario: Mutual exclusivity of indicators
**Given** an attribute has both `requiredForIssuance: true` and `nonSelectivelyDisclosable: true`  
**When** the attribute is displayed in the attributes list  
**Then** only the "Always disclosed" lock icon SHALL be shown  
**Because** non-selectively disclosable attributes are always included (making the "required" indicator redundant)

---

### Requirement: Icon Legend Display

The attribute selector SHALL display a legend explaining icon meanings.

#### Scenario: Legend with both icon types
**Given** the attributes list contains at least one attribute with `requiredForIssuance: true`  
**And** the attributes list contains at least one attribute with `nonSelectivelyDisclosable: true`  
**When** the attribute selector is rendered  
**Then** a legend SHALL be displayed below the attributes grid  
**And** the legend SHALL show the asterisk icon with text "Required for issuance"  
**And** the legend SHALL show the lock icon with text "Always disclosed"  
**And** the legend SHALL use muted text color (`text-muted-foreground`)  
**And** the legend SHALL use small font size (`text-xs`)

#### Scenario: Legend with only required indicators
**Given** the attributes list contains at least one attribute with `requiredForIssuance: true`  
**And** the attributes list contains no attributes with `nonSelectivelyDisclosable: true`  
**When** the attribute selector is rendered  
**Then** the legend SHALL be displayed  
**And** the legend SHALL show only the asterisk icon with text "Required for issuance"

#### Scenario: Legend with only always disclosed indicators
**Given** the attributes list contains no attributes with `requiredForIssuance: true`  
**And** the attributes list contains at least one attribute with `nonSelectivelyDisclosable: true`  
**When** the attribute selector is rendered  
**Then** the legend SHALL be displayed  
**And** the legend SHALL show only the lock icon with text "Always disclosed"

#### Scenario: No legend when no indicators present
**Given** the attributes list contains no attributes with `requiredForIssuance: true`  
**And** the attributes list contains no attributes with `nonSelectivelyDisclosable: true`  
**When** the attribute selector is rendered  
**Then** the legend SHALL NOT be displayed

#### Scenario: Legend horizontal layout on desktop
**Given** the legend is displayed  
**When** the viewport width is desktop or tablet size  
**Then** the legend items SHALL be arranged horizontally

#### Scenario: Legend stacked layout on mobile
**Given** the legend is displayed  
**When** the viewport width is mobile size and horizontal space is insufficient  
**Then** the legend items SHALL stack vertically using flex-wrap

---

## MODIFIED Requirements

None.

---

## REMOVED Requirements

None.
