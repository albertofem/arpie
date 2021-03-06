#pragma strict

var colors : Color[];

static var materials : Material[];
static var counter = 0;

function Awake() {
	if (!materials) {
		materials = new Material[colors.Length];
		for (var i = 0; i < colors.Length; i++) {
			materials[i] = Material(renderer.material);
			materials[i].color = colors[i];
		}
	}

	renderer.material = materials[counter];
	if (++counter == materials.Length) counter = 0;
}
