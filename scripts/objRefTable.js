const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Tilemap,
		C3.Plugins.Sprite,
		C3.Behaviors.jumpthru,
		C3.Behaviors.scrollto,
		C3.Behaviors.Platform,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetLayoutScale,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Behaviors.Platform.Cnds.OnStop,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Behaviors.Platform.Acts.SetGravity
	];
};
self.C3_JsPropNameTable = [
	{Mosaico: 0},
	{Barril: 0},
	{Janelas: 0},
	{bandeiras: 0},
	{portas: 0},
	{caixas: 0},
	{PularAtravés: 0},
	{escada: 0},
	{armas: 0},
	{tochas: 0},
	{CentrarEm: 0},
	{Plataforma: 0},
	{protagonista: 0},
	{Sólido: 0},
	{solido: 0},
	{Teclado: 0},
	{stopup: 0}
];

self.InstanceType = {
	Mosaico: class extends self.ITilemapInstance {},
	Barril: class extends self.ISpriteInstance {},
	Janelas: class extends self.ISpriteInstance {},
	bandeiras: class extends self.ISpriteInstance {},
	portas: class extends self.ISpriteInstance {},
	caixas: class extends self.ISpriteInstance {},
	escada: class extends self.ISpriteInstance {},
	armas: class extends self.ISpriteInstance {},
	tochas: class extends self.ISpriteInstance {},
	protagonista: class extends self.ISpriteInstance {},
	solido: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	stopup: class extends self.ISpriteInstance {}
}