const critical_critical = ["index", "target", "sentence", "trial_code", "status", "target_filename", "anchor_tag", "AIF1_tag", "IF1_tag", "IF3_tag", "IM1_tag", "IM2_tag", "competitor", "competitor_filename", "Distractor1", "Distractor1_filename", "Distractor2", "Distractor2_filename", "Distractor3", "Distractor3_filename", "det"]

const critical_trials = {
	di_archer_anchDet: {
		index: "1",
		target: "archer",
		sentence: "He wants to know about the archer",
		trial_code: "di_archer",
		status: "critical",
		target_filename: "PICTURE_1001.png",
		anchor_tag: "2",
		AIF1_tag: "3_2",
		IF1_tag: "1_1",
		IF3_tag: "1_1",
		IM1_tag: "3_2",
		IM2_tag: "2_1",
		competitor: "arch",
		competitor_filename: "PICTURE_1000.png",
		Distractor1: "robe",
		Distractor1_filename: "PICTURE_14.png",
		Distractor2: "jellyfish",
		Distractor2_filename: "PICTURE_193.png",
		Distractor3: "bagpipe",
		Distractor3_filename: "PICTURE_425.png",
		det: "anchDet",
		audio_filename: "AnF/di_archer_2_AnF.wav",
		AIF1_audio_filename: "AIF1/di_archer_3_AIF1_2_AnF_anchDet.wav",
		IF1_audio_filename: "IF1/di_archer_1_IF1_1_AnF_anchDet.wav",
		IF3_audio_filename: "IF3/di_archer_1_IF3_1_AnF_anchDet.wav",
		IM1_audio_filename: "IM1/di_archer_3_IM1_2_AnF_anchDet.wav",
		IM2_audio_filename: "IM2/di_archer_2_IM2_1_AnF_anchDet.wav"
	},
	di_armor_anchDet: {
		index: "2",
		target: "armor",
		sentence: "Ruth has a problem with the armor",
		trial_code: "di_armor",
		status: "critical",
		target_filename: "PICTURE_1002.png",
		anchor_tag: "2",
		AIF1_tag: "1_2",
		IF1_tag: "1_2",
		IF3_tag: "1_2",
		IM1_tag: "3_2",
		IM2_tag: "3_2",
		competitor: "arm",
		competitor_filename: "PICTURE_473.png",
		Distractor1: "fairy",
		Distractor1_filename: "PICTURE_7.png",
		Distractor2: "scale",
		Distractor2_filename: "PICTURE_212.png",
		Distractor3: "pistachio",
		Distractor3_filename: "PICTURE_410.png",
		det: "anchDet",
		audio_filename: "AnF/di_armor_2_AnF.wav",
		AIF1_audio_filename: "AIF1/di_armor_1_AIF1_2_AnF_anchDet.wav",
		IF1_audio_filename: "IF1/di_armor_1_IF1_2_AnF_anchDet.wav",
		IF3_audio_filename: "IF3/di_armor_1_IF3_2_AnF_anchDet.wav",
		IM1_audio_filename: "IM1/di_armor_3_IM1_2_AnF_anchDet.wav",
		IM2_audio_filename: "IM2/di_armor_3_IM2_2_AnF_anchDet.wav"
	},
	di_barrel_anchDet: {
		index: "3",
		target: "barrel",
		sentence: "We did not discuss the barrel",
		trial_code: "di_barrel",
		status: "critical",
		target_filename: "PICTURE_1003.png",
		anchor_tag: "1",
		AIF1_tag: "1_2",
		IF1_tag: "3_2",
		IF3_tag: "1_2",
		IM1_tag: "1_1",
		IM2_tag: "1_1",
		competitor: "bear",
		competitor_filename: "PICTURE_637.png",
		Distractor1: "shoulder",
		Distractor1_filename: "PICTURE_5.png",
		Distractor2: "compass",
		Distractor2_filename: "PICTURE_197.png",
		Distractor3: "egg",
		Distractor3_filename: "PICTURE_423.png",
		det: "anchDet",
		audio_filename: "AnF/di_barrel_1_AnF.wav",
		AIF1_audio_filename: "AIF1/di_barrel_1_AIF1_2_AnF_anchDet.wav",
		IF1_audio_filename: "IF1/di_barrel_3_IF1_2_AnF_anchDet.wav",
		IF3_audio_filename: "IF3/di_barrel_1_IF3_2_AnF_anchDet.wav",
		IM1_audio_filename: "IM1/di_barrel_1_IM1_1_AnF_anchDet.wav",
		IM2_audio_filename: "IM2/di_barrel_1_IM2_1_AnF_anchDet.wav"
	},
	di_diamond_anchDet: {
		index: "4",
		target: "diamond",
		sentence: "The boy thought about the diamond",
		trial_code: "di_diamond",
		status: "critical",
		target_filename: "PICTURE_85.png",
		anchor_tag: "1",
		AIF1_tag: "2_1",
		IF1_tag: "3_2",
		IF3_tag: "2_1",
		IM1_tag: "2_2",
		IM2_tag: "3_1",
		competitor: "dime",
		competitor_filename: "PICTURE_1006.png",
		Distractor1: "leg",
		Distractor1_filename: "PICTURE_8.png",
		Distractor2: "printer",
		Distractor2_filename: "PICTURE_204.png",
		Distractor3: "factory",
		Distractor3_filename: "PICTURE_412.png",
		det: "anchDet",
		audio_filename: "AnF/di_diamond_1_AnF.wav",
		AIF1_audio_filename: "AIF1/di_diamond_2_AIF1_1_AnF_anchDet.wav",
		IF1_audio_filename: "IF1/di_diamond_3_IF1_2_AnF_anchDet.wav",
		IF3_audio_filename: "IF3/di_diamond_2_IF3_1_AnF_anchDet.wav",
		IM1_audio_filename: "IM1/di_diamond_2_IM1_2_AnF_anchDet.wav",
		IM2_audio_filename: "IM2/di_diamond_3_IM2_1_AnF_anchDet.wav"
	},
	di_hammer_anchDet: {
		index: "5",
		target: "hammer",
		sentence: "I am thinking about the hammer",
		trial_code: "di_hammer",
		status: "critical",
		target_filename: "PICTURE_216.png",
		anchor_tag: "1",
		AIF1_tag: "2_1",
		IF1_tag: "1_2",
		IF3_tag: "1_2",
		IM1_tag: "3_1",
		IM2_tag: "3_1",
		competitor: "ham",
		competitor_filename: "PICTURE_1007.png",
		Distractor1: "church",
		Distractor1_filename: "PICTURE_4.png",
		Distractor2: "ankle",
		Distractor2_filename: "PICTURE_205.png",
		Distractor3: "throne",
		Distractor3_filename: "PICTURE_420.png",
		det: "anchDet",
		audio_filename: "AnF/di_hammer_1_AnF.wav",
		AIF1_audio_filename: "AIF1/di_hammer_2_AIF1_1_AnF_anchDet.wav",
		IF1_audio_filename: "IF1/di_hammer_1_IF1_2_AnF_anchDet.wav",
		IF3_audio_filename: "IF3/di_hammer_1_IF3_2_AnF_anchDet.wav",
		IM1_audio_filename: "IM1/di_hammer_3_IM1_1_AnF_anchDet.wav",
		IM2_audio_filename: "IM2/di_hammer_3_IM2_1_AnF_anchDet.wav"
	},
	di_needle_anchDet: {
		index: "6",
		target: "needle",
		sentence: "Paul spoke about the needle",
		trial_code: "di_needle",
		status: "critical",
		target_filename: "PICTURE_235.png",
		anchor_tag: "2",
		AIF1_tag: "2_1",
		IF1_tag: "1_1",
		IF3_tag: "1_2",
		IM1_tag: "2_2",
		IM2_tag: "1_2",
		competitor: "knee",
		competitor_filename: "PICTURE_222.png",
		Distractor1: "burger",
		Distractor1_filename: "PICTURE_11.png",
		Distractor2: "seagull",
		Distractor2_filename: "PICTURE_220.png",
		Distractor3: "comb",
		Distractor3_filename: "PICTURE_426.png",
		det: "anchDet",
		audio_filename: "AnF/di_needle_2_AnF.wav",
		AIF1_audio_filename: "AIF1/di_needle_2_AIF1_1_AnF_anchDet.wav",
		IF1_audio_filename: "IF1/di_needle_1_IF1_1_AnF_anchDet.wav",
		IF3_audio_filename: "IF3/di_needle_1_IF3_2_AnF_anchDet.wav",
		IM1_audio_filename: "IM1/di_needle_2_IM1_2_AnF_anchDet.wav",
		IM2_audio_filename: "IM2/di_needle_1_IM2_2_AnF_anchDet.wav"
	},
	di_panda_anchDet: {
		index: "7",
		target: "panda",
		sentence: "She wants to talk about the panda",
		trial_code: "di_panda",
		status: "critical",
		target_filename: "PICTURE_1014.png",
		anchor_tag: "2",
		AIF1_tag: "1_1",
		IF1_tag: "2_2",
		IF3_tag: "2_1",
		IM1_tag: "2_2",
		IM2_tag: "2_1",
		competitor: "pan",
		competitor_filename: "PICTURE_1013.png",
		Distractor1: "shower",
		Distractor1_filename: "PICTURE_9.png",
		Distractor2: "diaper",
		Distractor2_filename: "PICTURE_218.png",
		Distractor3: "sock",
		Distractor3_filename: "PICTURE_416.png",
		det: "anchDet",
		audio_filename: "AnF/di_panda_2_AnF.wav",
		AIF1_audio_filename: "AIF1/di_panda_1_AIF1_1_AnF_anchDet.wav",
		IF1_audio_filename: "IF1/di_panda_2_IF1_2_AnF_anchDet.wav",
		IF3_audio_filename: "IF3/di_panda_2_IF3_1_AnF_anchDet.wav",
		IM1_audio_filename: "IM1/di_panda_2_IM1_2_AnF_anchDet.wav",
		IM2_audio_filename: "IM2/di_panda_2_IM2_1_AnF_anchDet.wav"
	},
	di_pilgrim_anchDet: {
		index: "8",
		target: "pilgrim",
		sentence: "The man spoke about the pilgrim",
		trial_code: "di_pilgrim",
		status: "critical",
		target_filename: "PICTURE_1018.png",
		anchor_tag: "2",
		AIF1_tag: "2_1",
		IF1_tag: "1_1",
		IF3_tag: "2_1",
		IM1_tag: "1_2",
		IM2_tag: "2_2",
		competitor: "pill",
		competitor_filename: "PICTURE_1019.png",
		Distractor1: "lion",
		Distractor1_filename: "PICTURE_15.png",
		Distractor2: "zipper",
		Distractor2_filename: "PICTURE_223.png",
		Distractor3: "cannon",
		Distractor3_filename: "PICTURE_437.png",
		det: "anchDet",
		audio_filename: "AnF/di_pilgrim_2_AnF.wav",
		AIF1_audio_filename: "AIF1/di_pilgrim_2_AIF1_1_AnF_anchDet.wav",
		IF1_audio_filename: "IF1/di_pilgrim_1_IF1_1_AnF_anchDet.wav",
		IF3_audio_filename: "IF3/di_pilgrim_2_IF3_1_AnF_anchDet.wav",
		IM1_audio_filename: "IM1/di_pilgrim_1_IM1_2_AnF_anchDet.wav",
		IM2_audio_filename: "IM2/di_pilgrim_2_IM2_2_AnF_anchDet.wav"
	},
	di_sprinkler_anchDet: {
		index: "9",
		target: "sprinkler",
		sentence: "You were interested in the sprinkler",
		trial_code: "di_sprinkler",
		status: "critical",
		target_filename: "PICTURE_1023.png",
		anchor_tag: "1",
		AIF1_tag: "2_1",
		IF1_tag: "2_2",
		IF3_tag: "3_1",
		IM1_tag: "2_1",
		IM2_tag: "3_1",
		competitor: "spring",
		competitor_filename: "PICTURE_1022.png",
		Distractor1: "bicycle",
		Distractor1_filename: "PICTURE_23.png",
		Distractor2: "woman",
		Distractor2_filename: "PICTURE_239.png",
		Distractor3: "curtain",
		Distractor3_filename: "PICTURE_418.png",
		det: "anchDet",
		audio_filename: "AnF/di_sprinkler_1_AnF.wav",
		AIF1_audio_filename: "AIF1/di_sprinkler_2_AIF1_1_AnF_anchDet.wav",
		IF1_audio_filename: "IF1/di_sprinkler_2_IF1_2_AnF_anchDet.wav",
		IF3_audio_filename: "IF3/di_sprinkler_3_IF3_1_AnF_anchDet.wav",
		IM1_audio_filename: "IM1/di_sprinkler_2_IM1_1_AnF_anchDet.wav",
		IM2_audio_filename: "IM2/di_sprinkler_3_IM2_1_AnF_anchDet.wav"
	},
	tri_bikini_anchDet: {
		index: "10",
		target: "bikini",
		sentence: "We spoke about the bikini",
		trial_code: "tri_bikini",
		status: "critical",
		target_filename: "PICTURE_1004.png",
		anchor_tag: "1",
		AIF1_tag: "2_2",
		IF1_tag: "1_2",
		IF3_tag: "3_1",
		IM1_tag: "1_1",
		IM2_tag: "3_2",
		competitor: "key",
		competitor_filename: "PICTURE_78.png",
		Distractor1: "newspaper",
		Distractor1_filename: "PICTURE_61.png",
		Distractor2: "paintbrush",
		Distractor2_filename: "PICTURE_224.png",
		Distractor3: "thumb",
		Distractor3_filename: "PICTURE_438.png",
		det: "anchDet",
		audio_filename: "AnF/tri_bikini_1_AnF.wav",
		AIF1_audio_filename: "AIF1/tri_bikini_2_AIF1_2_AnF_anchDet.wav",
		IF1_audio_filename: "IF1/tri_bikini_1_IF1_2_AnF_anchDet.wav",
		IF3_audio_filename: "IF3/tri_bikini_3_IF3_1_AnF_anchDet.wav",
		IM1_audio_filename: "IM1/tri_bikini_1_IM1_1_AnF_anchDet.wav",
		IM2_audio_filename: "IM2/tri_bikini_3_IM2_2_AnF_anchDet.wav"
	},
	tri_conductor_anchDet: {
		index: "11",
		target: "conductor",
		sentence: "The old man talked about the conductor",
		trial_code: "tri_conductor",
		status: "critical",
		target_filename: "PICTURE_1005.png",
		anchor_tag: "2",
		AIF1_tag: "2_2",
		IF1_tag: "2_2",
		IF3_tag: "1_2",
		IM1_tag: "3_1",
		IM2_tag: "2_2",
		competitor: "duck",
		competitor_filename: "PICTURE_400.png",
		Distractor1: "hairbrush",
		Distractor1_filename: "PICTURE_43.png",
		Distractor2: "wall",
		Distractor2_filename: "PICTURE_227.png",
		Distractor3: "mitten",
		Distractor3_filename: "PICTURE_431.png",
		det: "anchDet",
		audio_filename: "AnF/tri_conductor_2_AnF.wav",
		AIF1_audio_filename: "AIF1/tri_conductor_2_AIF1_2_AnF_anchDet.wav",
		IF1_audio_filename: "IF1/tri_conductor_2_IF1_2_AnF_anchDet.wav",
		IF3_audio_filename: "IF3/tri_conductor_1_IF3_2_AnF_anchDet.wav",
		IM1_audio_filename: "IM1/tri_conductor_3_IM1_1_AnF_anchDet.wav",
		IM2_audio_filename: "IM2/tri_conductor_2_IM2_2_AnF_anchDet.wav"
	},
	tri_eraser_anchDet: {
		index: "12",
		target: "eraser",
		sentence: "Mary knows about the eraser",
		trial_code: "tri_eraser",
		status: "critical",
		target_filename: "PICTURE_464.png",
		anchor_tag: "2",
		AIF1_tag: "2_2",
		IF1_tag: "2_1",
		IF3_tag: "1_1",
		IM1_tag: "1_1",
		IM2_tag: "3_1",
		competitor: "race",
		competitor_filename: "PICTURE_1020.png",
		Distractor1: "candle",
		Distractor1_filename: "PICTURE_68.png",
		Distractor2: "llama",
		Distractor2_filename: "PICTURE_232.png",
		Distractor3: "mustache",
		Distractor3_filename: "PICTURE_494.png",
		det: "anchDet",
		audio_filename: "AnF/tri_eraser_2_AnF.wav",
		AIF1_audio_filename: "AIF1/tri_eraser_2_AIF1_2_AnF_anchDet.wav",
		IF1_audio_filename: "IF1/tri_eraser_2_IF1_1_AnF_anchDet.wav",
		IF3_audio_filename: "IF3/tri_eraser_1_IF3_1_AnF_anchDet.wav",
		IM1_audio_filename: "IM1/tri_eraser_1_IM1_1_AnF_anchDet.wav",
		IM2_audio_filename: "IM2/tri_eraser_3_IM2_1_AnF_anchDet.wav"
	},
	tri_intestine_anchDet: {
		index: "13",
		target: "intestine",
		sentence: "We were discussing the intestine",
		trial_code: "tri_intestine",
		status: "critical",
		target_filename: "PICTURE_1009.png",
		anchor_tag: "2",
		AIF1_tag: "2_1",
		IF1_tag: "3_1",
		IF3_tag: "1_1",
		IM1_tag: "3_1",
		IM2_tag: "2_1",
		competitor: "test",
		competitor_filename: "PICTURE_1024.png",
		Distractor1: "roof",
		Distractor1_filename: "PICTURE_66.png",
		Distractor2: "puzzle",
		Distractor2_filename: "PICTURE_238.png",
		Distractor3: "clothespin",
		Distractor3_filename: "PICTURE_467.png",
		det: "anchDet",
		audio_filename: "AnF/tri_intestine_2_AnF.wav",
		AIF1_audio_filename: "AIF1/tri_intestine_2_AIF1_1_AnF_anchDet.wav",
		IF1_audio_filename: "IF1/tri_intestine_3_IF1_1_AnF_anchDet.wav",
		IF3_audio_filename: "IF3/tri_intestine_1_IF3_1_AnF_anchDet.wav",
		IM1_audio_filename: "IM1/tri_intestine_3_IM1_1_AnF_anchDet.wav",
		IM2_audio_filename: "IM2/tri_intestine_2_IM2_1_AnF_anchDet.wav"
	},
	tri_pajamas_anchDet: {
		index: "14",
		target: "pajamas",
		sentence: "Jane has a problem with the pajamas",
		trial_code: "tri_pajamas",
		status: "critical",
		target_filename: "PICTURE_1012.png",
		anchor_tag: "1",
		AIF1_tag: "3_2",
		IF1_tag: "2_2",
		IF3_tag: "1_1",
		IM1_tag: "1_1",
		IM2_tag: "1_1",
		competitor: "jam",
		competitor_filename: "PICTURE_1010.png",
		Distractor1: "screwdriver",
		Distractor1_filename: "PICTURE_46.png",
		Distractor2: "train",
		Distractor2_filename: "PICTURE_226.png",
		Distractor3: "bell",
		Distractor3_filename: "PICTURE_433.png",
		det: "anchDet",
		audio_filename: "AnF/tri_pajamas_1_AnF.wav",
		AIF1_audio_filename: "AIF1/tri_pajamas_3_AIF1_2_AnF_anchDet.wav",
		IF1_audio_filename: "IF1/tri_pajamas_2_IF1_2_AnF_anchDet.wav",
		IF3_audio_filename: "IF3/tri_pajamas_1_IF3_1_AnF_anchDet.wav",
		IM1_audio_filename: "IM1/tri_pajamas_1_IM1_1_AnF_anchDet.wav",
		IM2_audio_filename: "IM2/tri_pajamas_1_IM2_1_AnF_anchDet.wav"
	},
	tri_papaya_anchDet: {
		index: "15",
		target: "papaya",
		sentence: "They were interested in the papaya",
		trial_code: "tri_papaya",
		status: "critical",
		target_filename: "PICTURE_1015.png",
		anchor_tag: "1",
		AIF1_tag: "3_1",
		IF1_tag: "3_2",
		IF3_tag: "3_2",
		IM1_tag: "2_1",
		IM2_tag: "3_2",
		competitor: "pie",
		competitor_filename: "PICTURE_1017.png",
		Distractor1: "couch",
		Distractor1_filename: "PICTURE_67.png",
		Distractor2: "mailman",
		Distractor2_filename: "PICTURE_242.png",
		Distractor3: "rectangle",
		Distractor3_filename: "PICTURE_463.png",
		det: "anchDet",
		audio_filename: "AnF/tri_papaya_1_AnF.wav",
		AIF1_audio_filename: "AIF1/tri_papaya_3_AIF1_1_AnF_anchDet.wav",
		IF1_audio_filename: "IF1/tri_papaya_3_IF1_2_AnF_anchDet.wav",
		IF3_audio_filename: "IF3/tri_papaya_3_IF3_2_AnF_anchDet.wav",
		IM1_audio_filename: "IM1/tri_papaya_2_IM1_1_AnF_anchDet.wav",
		IM2_audio_filename: "IM2/tri_papaya_3_IM2_2_AnF_anchDet.wav"
	},
	tri_repairman_anchDet: {
		index: "16",
		target: "repairman",
		sentence: "I did not know about the repairman",
		trial_code: "tri_repairman",
		status: "critical",
		target_filename: "PICTURE_1021.png",
		anchor_tag: "2",
		AIF1_tag: "1_2",
		IF1_tag: "1_2",
		IF3_tag: "1_2",
		IM1_tag: "1_1",
		IM2_tag: "3_2",
		competitor: "pear",
		competitor_filename: "PICTURE_42.png",
		Distractor1: "button",
		Distractor1_filename: "PICTURE_64.png",
		Distractor2: "eye",
		Distractor2_filename: "PICTURE_241.png",
		Distractor3: "watch",
		Distractor3_filename: "PICTURE_452.png",
		det: "anchDet",
		audio_filename: "AnF/tri_repairman_2_AnF.wav",
		AIF1_audio_filename: "AIF1/tri_repairman_1_AIF1_2_AnF_anchDet.wav",
		IF1_audio_filename: "IF1/tri_repairman_1_IF1_2_AnF_anchDet.wav",
		IF3_audio_filename: "IF3/tri_repairman_1_IF3_2_AnF_anchDet.wav",
		IM1_audio_filename: "IM1/tri_repairman_1_IM1_1_AnF_anchDet.wav",
		IM2_audio_filename: "IM2/tri_repairman_3_IM2_2_AnF_anchDet.wav"
	},
	tri_torpedo_anchDet: {
		index: "17",
		target: "torpedo",
		sentence: "Peter knows about the torpedo",
		trial_code: "tri_torpedo",
		status: "critical",
		target_filename: "PICTURE_1025.png",
		anchor_tag: "2",
		AIF1_tag: "2_2",
		IF1_tag: "2_1",
		IF3_tag: "3_1",
		IM1_tag: "3_1",
		IM2_tag: "1_1",
		competitor: "pea",
		competitor_filename: "PICTURE_1016.png",
		Distractor1: "firefighter",
		Distractor1_filename: "PICTURE_48.png",
		Distractor2: "giraffe",
		Distractor2_filename: "PICTURE_236.png",
		Distractor3: "star",
		Distractor3_filename: "PICTURE_447.png",
		det: "anchDet",
		audio_filename: "AnF/tri_torpedo_2_AnF.wav",
		AIF1_audio_filename: "AIF1/tri_torpedo_2_AIF1_2_AnF_anchDet.wav",
		IF1_audio_filename: "IF1/tri_torpedo_2_IF1_1_AnF_anchDet.wav",
		IF3_audio_filename: "IF3/tri_torpedo_3_IF3_1_AnF_anchDet.wav",
		IM1_audio_filename: "IM1/tri_torpedo_3_IM1_1_AnF_anchDet.wav",
		IM2_audio_filename: "IM2/tri_torpedo_1_IM2_1_AnF_anchDet.wav"
	},
	tri_volcano_anchDet: {
		index: "18",
		target: "volcano",
		sentence: "He is thinking about the volcano",
		trial_code: "tri_volcano",
		status: "critical",
		target_filename: "PICTURE_439.png",
		anchor_tag: "2",
		AIF1_tag: "1_2",
		IF1_tag: "3_2",
		IF3_tag: "3_1",
		IM1_tag: "3_1",
		IM2_tag: "1_1",
		competitor: "cane",
		competitor_filename: "PICTURE_676.png",
		Distractor1: "trophy",
		Distractor1_filename: "PICTURE_71.png",
		Distractor2: "acorn",
		Distractor2_filename: "PICTURE_228.png",
		Distractor3: "square",
		Distractor3_filename: "PICTURE_472.png",
		det: "anchDet",
		audio_filename: "AnF/tri_volcano_2_AnF.wav",
		AIF1_audio_filename: "AIF1/tri_volcano_1_AIF1_2_AnF_anchDet.wav",
		IF1_audio_filename: "IF1/tri_volcano_3_IF1_2_AnF_anchDet.wav",
		IF3_audio_filename: "IF3/tri_volcano_3_IF3_1_AnF_anchDet.wav",
		IM1_audio_filename: "IM1/tri_volcano_3_IM1_1_AnF_anchDet.wav",
		IM2_audio_filename: "IM2/tri_volcano_1_IM2_1_AnF_anchDet.wav"
	},
	di_archer_intDet: {
		index: "1",
		target: "archer",
		sentence: "He wants to know about the archer",
		trial_code: "di_archer",
		status: "critical",
		target_filename: "PICTURE_1001.png",
		anchor_tag: "2",
		AIF1_tag: "3_2",
		IF1_tag: "1_1",
		IF3_tag: "1_1",
		IM1_tag: "3_2",
		IM2_tag: "2_1",
		competitor: "arch",
		competitor_filename: "PICTURE_1000.png",
		Distractor1: "robe",
		Distractor1_filename: "PICTURE_14.png",
		Distractor2: "jellyfish",
		Distractor2_filename: "PICTURE_193.png",
		Distractor3: "bagpipe",
		Distractor3_filename: "PICTURE_425.png",
		det: "intDet",
		audio_filename: "AnF/di_archer_2_AnF.wav",
		AIF1_audio_filename: "AIF1/di_archer_3_AIF1_2_AnF_intDet.wav",
		IF1_audio_filename: "IF1/di_archer_1_IF1_1_AnF_intDet.wav",
		IF3_audio_filename: "IF3/di_archer_1_IF3_1_AnF_intDet.wav",
		IM1_audio_filename: "IM1/di_archer_3_IM1_2_AnF_intDet.wav",
		IM2_audio_filename: "IM2/di_archer_2_IM2_1_AnF_intDet.wav"
	},
	di_armor_intDet: {
		index: "2",
		target: "armor",
		sentence: "Ruth has a problem with the armor",
		trial_code: "di_armor",
		status: "critical",
		target_filename: "PICTURE_1002.png",
		anchor_tag: "2",
		AIF1_tag: "1_2",
		IF1_tag: "1_2",
		IF3_tag: "1_2",
		IM1_tag: "3_2",
		IM2_tag: "3_2",
		competitor: "arm",
		competitor_filename: "PICTURE_473.png",
		Distractor1: "fairy",
		Distractor1_filename: "PICTURE_7.png",
		Distractor2: "scale",
		Distractor2_filename: "PICTURE_212.png",
		Distractor3: "pistachio",
		Distractor3_filename: "PICTURE_410.png",
		det: "intDet",
		audio_filename: "AnF/di_armor_2_AnF.wav",
		AIF1_audio_filename: "AIF1/di_armor_1_AIF1_2_AnF_intDet.wav",
		IF1_audio_filename: "IF1/di_armor_1_IF1_2_AnF_intDet.wav",
		IF3_audio_filename: "IF3/di_armor_1_IF3_2_AnF_intDet.wav",
		IM1_audio_filename: "IM1/di_armor_3_IM1_2_AnF_intDet.wav",
		IM2_audio_filename: "IM2/di_armor_3_IM2_2_AnF_intDet.wav"
	},
	di_barrel_intDet: {
		index: "3",
		target: "barrel",
		sentence: "We did not discuss the barrel",
		trial_code: "di_barrel",
		status: "critical",
		target_filename: "PICTURE_1003.png",
		anchor_tag: "1",
		AIF1_tag: "1_2",
		IF1_tag: "3_2",
		IF3_tag: "1_2",
		IM1_tag: "1_1",
		IM2_tag: "1_1",
		competitor: "bear",
		competitor_filename: "PICTURE_637.png",
		Distractor1: "shoulder",
		Distractor1_filename: "PICTURE_5.png",
		Distractor2: "compass",
		Distractor2_filename: "PICTURE_197.png",
		Distractor3: "egg",
		Distractor3_filename: "PICTURE_423.png",
		det: "intDet",
		audio_filename: "AnF/di_barrel_1_AnF.wav",
		AIF1_audio_filename: "AIF1/di_barrel_1_AIF1_2_AnF_intDet.wav",
		IF1_audio_filename: "IF1/di_barrel_3_IF1_2_AnF_intDet.wav",
		IF3_audio_filename: "IF3/di_barrel_1_IF3_2_AnF_intDet.wav",
		IM1_audio_filename: "IM1/di_barrel_1_IM1_1_AnF_intDet.wav",
		IM2_audio_filename: "IM2/di_barrel_1_IM2_1_AnF_intDet.wav"
	},
	di_diamond_intDet: {
		index: "4",
		target: "diamond",
		sentence: "The boy thought about the diamond",
		trial_code: "di_diamond",
		status: "critical",
		target_filename: "PICTURE_85.png",
		anchor_tag: "1",
		AIF1_tag: "2_1",
		IF1_tag: "3_2",
		IF3_tag: "2_1",
		IM1_tag: "2_2",
		IM2_tag: "3_1",
		competitor: "dime",
		competitor_filename: "PICTURE_1006.png",
		Distractor1: "leg",
		Distractor1_filename: "PICTURE_8.png",
		Distractor2: "printer",
		Distractor2_filename: "PICTURE_204.png",
		Distractor3: "factory",
		Distractor3_filename: "PICTURE_412.png",
		det: "intDet",
		audio_filename: "AnF/di_diamond_1_AnF.wav",
		AIF1_audio_filename: "AIF1/di_diamond_2_AIF1_1_AnF_intDet.wav",
		IF1_audio_filename: "IF1/di_diamond_3_IF1_2_AnF_intDet.wav",
		IF3_audio_filename: "IF3/di_diamond_2_IF3_1_AnF_intDet.wav",
		IM1_audio_filename: "IM1/di_diamond_2_IM1_2_AnF_intDet.wav",
		IM2_audio_filename: "IM2/di_diamond_3_IM2_1_AnF_intDet.wav"
	},
	di_hammer_intDet: {
		index: "5",
		target: "hammer",
		sentence: "I am thinking about the hammer",
		trial_code: "di_hammer",
		status: "critical",
		target_filename: "PICTURE_216.png",
		anchor_tag: "1",
		AIF1_tag: "2_1",
		IF1_tag: "1_2",
		IF3_tag: "1_2",
		IM1_tag: "3_1",
		IM2_tag: "3_1",
		competitor: "ham",
		competitor_filename: "PICTURE_1007.png",
		Distractor1: "church",
		Distractor1_filename: "PICTURE_4.png",
		Distractor2: "ankle",
		Distractor2_filename: "PICTURE_205.png",
		Distractor3: "throne",
		Distractor3_filename: "PICTURE_420.png",
		det: "intDet",
		audio_filename: "AnF/di_hammer_1_AnF.wav",
		AIF1_audio_filename: "AIF1/di_hammer_2_AIF1_1_AnF_intDet.wav",
		IF1_audio_filename: "IF1/di_hammer_1_IF1_2_AnF_intDet.wav",
		IF3_audio_filename: "IF3/di_hammer_1_IF3_2_AnF_intDet.wav",
		IM1_audio_filename: "IM1/di_hammer_3_IM1_1_AnF_intDet.wav",
		IM2_audio_filename: "IM2/di_hammer_3_IM2_1_AnF_intDet.wav"
	},
	di_needle_intDet: {
		index: "6",
		target: "needle",
		sentence: "Paul spoke about the needle",
		trial_code: "di_needle",
		status: "critical",
		target_filename: "PICTURE_235.png",
		anchor_tag: "2",
		AIF1_tag: "2_1",
		IF1_tag: "1_1",
		IF3_tag: "1_2",
		IM1_tag: "2_2",
		IM2_tag: "1_2",
		competitor: "knee",
		competitor_filename: "PICTURE_222.png",
		Distractor1: "burger",
		Distractor1_filename: "PICTURE_11.png",
		Distractor2: "seagull",
		Distractor2_filename: "PICTURE_220.png",
		Distractor3: "comb",
		Distractor3_filename: "PICTURE_426.png",
		det: "intDet",
		audio_filename: "AnF/di_needle_2_AnF.wav",
		AIF1_audio_filename: "AIF1/di_needle_2_AIF1_1_AnF_intDet.wav",
		IF1_audio_filename: "IF1/di_needle_1_IF1_1_AnF_intDet.wav",
		IF3_audio_filename: "IF3/di_needle_1_IF3_2_AnF_intDet.wav",
		IM1_audio_filename: "IM1/di_needle_2_IM1_2_AnF_intDet.wav",
		IM2_audio_filename: "IM2/di_needle_1_IM2_2_AnF_intDet.wav"
	},
	di_panda_intDet: {
		index: "7",
		target: "panda",
		sentence: "She wants to talk about the panda",
		trial_code: "di_panda",
		status: "critical",
		target_filename: "PICTURE_1014.png",
		anchor_tag: "2",
		AIF1_tag: "1_1",
		IF1_tag: "2_2",
		IF3_tag: "2_1",
		IM1_tag: "1_1",
		IM2_tag: "2_1",
		competitor: "pan",
		competitor_filename: "PICTURE_1013.png",
		Distractor1: "shower",
		Distractor1_filename: "PICTURE_9.png",
		Distractor2: "diaper",
		Distractor2_filename: "PICTURE_218.png",
		Distractor3: "sock",
		Distractor3_filename: "PICTURE_416.png",
		det: "intDet",
		audio_filename: "AnF/di_panda_2_AnF.wav",
		AIF1_audio_filename: "AIF1/di_panda_1_AIF1_1_AnF_intDet.wav",
		IF1_audio_filename: "IF1/di_panda_2_IF1_2_AnF_intDet.wav",
		IF3_audio_filename: "IF3/di_panda_2_IF3_1_AnF_intDet.wav",
		IM1_audio_filename: "IM1/di_panda_1_IM1_1_AnF_intDet.wav",
		IM2_audio_filename: "IM2/di_panda_2_IM2_1_AnF_intDet.wav"
	},
	di_pilgrim_intDet: {
		index: "8",
		target: "pilgrim",
		sentence: "The man spoke about the pilgrim",
		trial_code: "di_pilgrim",
		status: "critical",
		target_filename: "PICTURE_1018.png",
		anchor_tag: "2",
		AIF1_tag: "2_1",
		IF1_tag: "1_1",
		IF3_tag: "2_1",
		IM1_tag: "1_2",
		IM2_tag: "2_2",
		competitor: "pill",
		competitor_filename: "PICTURE_1019.png",
		Distractor1: "lion",
		Distractor1_filename: "PICTURE_15.png",
		Distractor2: "zipper",
		Distractor2_filename: "PICTURE_223.png",
		Distractor3: "cannon",
		Distractor3_filename: "PICTURE_437.png",
		det: "intDet",
		audio_filename: "AnF/di_pilgrim_2_AnF.wav",
		AIF1_audio_filename: "AIF1/di_pilgrim_2_AIF1_1_AnF_intDet.wav",
		IF1_audio_filename: "IF1/di_pilgrim_1_IF1_1_AnF_intDet.wav",
		IF3_audio_filename: "IF3/di_pilgrim_2_IF3_1_AnF_intDet.wav",
		IM1_audio_filename: "IM1/di_pilgrim_1_IM1_2_AnF_intDet.wav",
		IM2_audio_filename: "IM2/di_pilgrim_2_IM2_2_AnF_intDet.wav"
	},
	di_sprinkler_intDet: {
		index: "9",
		target: "sprinkler",
		sentence: "You were interested in the sprinkler",
		trial_code: "di_sprinkler",
		status: "critical",
		target_filename: "PICTURE_1023.png",
		anchor_tag: "1",
		AIF1_tag: "2_1",
		IF1_tag: "2_2",
		IF3_tag: "1_2",
		IM1_tag: "3_2",
		IM2_tag: "2_2",
		competitor: "spring",
		competitor_filename: "PICTURE_1022.png",
		Distractor1: "bicycle",
		Distractor1_filename: "PICTURE_23.png",
		Distractor2: "woman",
		Distractor2_filename: "PICTURE_239.png",
		Distractor3: "curtain",
		Distractor3_filename: "PICTURE_418.png",
		det: "intDet",
		audio_filename: "AnF/di_sprinkler_1_AnF.wav",
		AIF1_audio_filename: "AIF1/di_sprinkler_2_AIF1_1_AnF_intDet.wav",
		IF1_audio_filename: "IF1/di_sprinkler_2_IF1_2_AnF_intDet.wav",
		IF3_audio_filename: "IF3/di_sprinkler_1_IF3_2_AnF_intDet.wav",
		IM1_audio_filename: "IM1/di_sprinkler_3_IM1_2_AnF_intDet.wav",
		IM2_audio_filename: "IM2/di_sprinkler_2_IM2_2_AnF_intDet.wav"
	},
	tri_bikini_intDet: {
		index: "10",
		target: "bikini",
		sentence: "We spoke about the bikini",
		trial_code: "tri_bikini",
		status: "critical",
		target_filename: "PICTURE_1004.png",
		anchor_tag: "1",
		AIF1_tag: "2_2",
		IF1_tag: "1_2",
		IF3_tag: "3_1",
		IM1_tag: "1_1",
		IM2_tag: "3_2",
		competitor: "key",
		competitor_filename: "PICTURE_78.png",
		Distractor1: "newspaper",
		Distractor1_filename: "PICTURE_61.png",
		Distractor2: "paintbrush",
		Distractor2_filename: "PICTURE_224.png",
		Distractor3: "thumb",
		Distractor3_filename: "PICTURE_438.png",
		det: "intDet",
		audio_filename: "AnF/tri_bikini_1_AnF.wav",
		AIF1_audio_filename: "AIF1/tri_bikini_2_AIF1_2_AnF_intDet.wav",
		IF1_audio_filename: "IF1/tri_bikini_1_IF1_2_AnF_intDet.wav",
		IF3_audio_filename: "IF3/tri_bikini_3_IF3_1_AnF_intDet.wav",
		IM1_audio_filename: "IM1/tri_bikini_1_IM1_1_AnF_intDet.wav",
		IM2_audio_filename: "IM2/tri_bikini_3_IM2_2_AnF_intDet.wav"
	},
	tri_conductor_intDet: {
		index: "11",
		target: "conductor",
		sentence: "The old man talked about the conductor",
		trial_code: "tri_conductor",
		status: "critical",
		target_filename: "PICTURE_1005.png",
		anchor_tag: "2",
		AIF1_tag: "2_2",
		IF1_tag: "2_2",
		IF3_tag: "1_2",
		IM1_tag: "3_1",
		IM2_tag: "2_2",
		competitor: "duck",
		competitor_filename: "PICTURE_400.png",
		Distractor1: "hairbrush",
		Distractor1_filename: "PICTURE_43.png",
		Distractor2: "wall",
		Distractor2_filename: "PICTURE_227.png",
		Distractor3: "mitten",
		Distractor3_filename: "PICTURE_431.png",
		det: "intDet",
		audio_filename: "AnF/tri_conductor_2_AnF.wav",
		AIF1_audio_filename: "AIF1/tri_conductor_2_AIF1_2_AnF_intDet.wav",
		IF1_audio_filename: "IF1/tri_conductor_2_IF1_2_AnF_intDet.wav",
		IF3_audio_filename: "IF3/tri_conductor_1_IF3_2_AnF_intDet.wav",
		IM1_audio_filename: "IM1/tri_conductor_3_IM1_1_AnF_intDet.wav",
		IM2_audio_filename: "IM2/tri_conductor_2_IM2_2_AnF_intDet.wav"
	},
	tri_eraser_intDet: {
		index: "12",
		target: "eraser",
		sentence: "Mary knows about the eraser",
		trial_code: "tri_eraser",
		status: "critical",
		target_filename: "PICTURE_464.png",
		anchor_tag: "2",
		AIF1_tag: "2_2",
		IF1_tag: "2_1",
		IF3_tag: "1_1",
		IM1_tag: "1_1",
		IM2_tag: "3_1",
		competitor: "race",
		competitor_filename: "PICTURE_1020.png",
		Distractor1: "candle",
		Distractor1_filename: "PICTURE_68.png",
		Distractor2: "llama",
		Distractor2_filename: "PICTURE_232.png",
		Distractor3: "mustache",
		Distractor3_filename: "PICTURE_494.png",
		det: "intDet",
		audio_filename: "AnF/tri_eraser_2_AnF.wav",
		AIF1_audio_filename: "AIF1/tri_eraser_2_AIF1_2_AnF_intDet.wav",
		IF1_audio_filename: "IF1/tri_eraser_2_IF1_1_AnF_intDet.wav",
		IF3_audio_filename: "IF3/tri_eraser_1_IF3_1_AnF_intDet.wav",
		IM1_audio_filename: "IM1/tri_eraser_1_IM1_1_AnF_intDet.wav",
		IM2_audio_filename: "IM2/tri_eraser_3_IM2_1_AnF_intDet.wav"
	},
	tri_intestine_intDet: {
		index: "13",
		target: "intestine",
		sentence: "We were discussing the intestine",
		trial_code: "tri_intestine",
		status: "critical",
		target_filename: "PICTURE_1009.png",
		anchor_tag: "2",
		AIF1_tag: "2_1",
		IF1_tag: "1_2",
		IF3_tag: "1_1",
		IM1_tag: "3_1",
		IM2_tag: "2_1",
		competitor: "test",
		competitor_filename: "PICTURE_1024.png",
		Distractor1: "roof",
		Distractor1_filename: "PICTURE_66.png",
		Distractor2: "puzzle",
		Distractor2_filename: "PICTURE_238.png",
		Distractor3: "clothespin",
		Distractor3_filename: "PICTURE_467.png",
		det: "intDet",
		audio_filename: "AnF/tri_intestine_2_AnF.wav",
		AIF1_audio_filename: "AIF1/tri_intestine_2_AIF1_1_AnF_intDet.wav",
		IF1_audio_filename: "IF1/tri_intestine_1_IF1_2_AnF_intDet.wav",
		IF3_audio_filename: "IF3/tri_intestine_1_IF3_1_AnF_intDet.wav",
		IM1_audio_filename: "IM1/tri_intestine_3_IM1_1_AnF_intDet.wav",
		IM2_audio_filename: "IM2/tri_intestine_2_IM2_1_AnF_intDet.wav"
	},
	tri_pajamas_intDet: {
		index: "14",
		target: "pajamas",
		sentence: "Jane has a problem with the pajamas",
		trial_code: "tri_pajamas",
		status: "critical",
		target_filename: "PICTURE_1012.png",
		anchor_tag: "1",
		AIF1_tag: "3_2",
		IF1_tag: "2_2",
		IF3_tag: "1_1",
		IM1_tag: "1_1",
		IM2_tag: "1_1",
		competitor: "jam",
		competitor_filename: "PICTURE_1010.png",
		Distractor1: "screwdriver",
		Distractor1_filename: "PICTURE_46.png",
		Distractor2: "train",
		Distractor2_filename: "PICTURE_226.png",
		Distractor3: "bell",
		Distractor3_filename: "PICTURE_433.png",
		det: "intDet",
		audio_filename: "AnF/tri_pajamas_1_AnF.wav",
		AIF1_audio_filename: "AIF1/tri_pajamas_3_AIF1_2_AnF_intDet.wav",
		IF1_audio_filename: "IF1/tri_pajamas_2_IF1_2_AnF_intDet.wav",
		IF3_audio_filename: "IF3/tri_pajamas_1_IF3_1_AnF_intDet.wav",
		IM1_audio_filename: "IM1/tri_pajamas_1_IM1_1_AnF_intDet.wav",
		IM2_audio_filename: "IM2/tri_pajamas_1_IM2_1_AnF_intDet.wav"
	},
	tri_papaya_intDet: {
		index: "15",
		target: "papaya",
		sentence: "They were interested in the papaya",
		trial_code: "tri_papaya",
		status: "critical",
		target_filename: "PICTURE_1015.png",
		anchor_tag: "1",
		AIF1_tag: "3_1",
		IF1_tag: "3_2",
		IF3_tag: "2_1",
		IM1_tag: "2_1",
		IM2_tag: "3_2",
		competitor: "pie",
		competitor_filename: "PICTURE_1017.png",
		Distractor1: "couch",
		Distractor1_filename: "PICTURE_67.png",
		Distractor2: "mailman",
		Distractor2_filename: "PICTURE_242.png",
		Distractor3: "rectangle",
		Distractor3_filename: "PICTURE_463.png",
		det: "intDet",
		audio_filename: "AnF/tri_papaya_1_AnF.wav",
		AIF1_audio_filename: "AIF1/tri_papaya_3_AIF1_1_AnF_intDet.wav",
		IF1_audio_filename: "IF1/tri_papaya_3_IF1_2_AnF_intDet.wav",
		IF3_audio_filename: "IF3/tri_papaya_2_IF3_1_AnF_intDet.wav",
		IM1_audio_filename: "IM1/tri_papaya_2_IM1_1_AnF_intDet.wav",
		IM2_audio_filename: "IM2/tri_papaya_3_IM2_2_AnF_intDet.wav"
	},
	tri_repairman_intDet: {
		index: "16",
		target: "repairman",
		sentence: "I did not know about the repairman",
		trial_code: "tri_repairman",
		status: "critical",
		target_filename: "PICTURE_1021.png",
		anchor_tag: "2",
		AIF1_tag: "1_2",
		IF1_tag: "1_2",
		IF3_tag: "1_2",
		IM1_tag: "1_1",
		IM2_tag: "3_2",
		competitor: "pear",
		competitor_filename: "PICTURE_42.png",
		Distractor1: "button",
		Distractor1_filename: "PICTURE_64.png",
		Distractor2: "eye",
		Distractor2_filename: "PICTURE_241.png",
		Distractor3: "watch",
		Distractor3_filename: "PICTURE_452.png",
		det: "intDet",
		audio_filename: "AnF/tri_repairman_2_AnF.wav",
		AIF1_audio_filename: "AIF1/tri_repairman_1_AIF1_2_AnF_intDet.wav",
		IF1_audio_filename: "IF1/tri_repairman_1_IF1_2_AnF_intDet.wav",
		IF3_audio_filename: "IF3/tri_repairman_1_IF3_2_AnF_intDet.wav",
		IM1_audio_filename: "IM1/tri_repairman_1_IM1_1_AnF_intDet.wav",
		IM2_audio_filename: "IM2/tri_repairman_3_IM2_2_AnF_intDet.wav"
	},
	tri_torpedo_intDet: {
		index: "17",
		target: "torpedo",
		sentence: "Peter knows about the torpedo",
		trial_code: "tri_torpedo",
		status: "critical",
		target_filename: "PICTURE_1025.png",
		anchor_tag: "2",
		AIF1_tag: "2_2",
		IF1_tag: "2_1",
		IF3_tag: "3_1",
		IM1_tag: "3_1",
		IM2_tag: "1_1",
		competitor: "pea",
		competitor_filename: "PICTURE_1016.png",
		Distractor1: "firefighter",
		Distractor1_filename: "PICTURE_48.png",
		Distractor2: "giraffe",
		Distractor2_filename: "PICTURE_236.png",
		Distractor3: "star",
		Distractor3_filename: "PICTURE_447.png",
		det: "intDet",
		audio_filename: "AnF/tri_torpedo_2_AnF.wav",
		AIF1_audio_filename: "AIF1/tri_torpedo_2_AIF1_2_AnF_intDet.wav",
		IF1_audio_filename: "IF1/tri_torpedo_2_IF1_1_AnF_intDet.wav",
		IF3_audio_filename: "IF3/tri_torpedo_3_IF3_1_AnF_intDet.wav",
		IM1_audio_filename: "IM1/tri_torpedo_3_IM1_1_AnF_intDet.wav",
		IM2_audio_filename: "IM2/tri_torpedo_1_IM2_1_AnF_intDet.wav"
	},
	tri_volcano_intDet: {
		index: "18",
		target: "volcano",
		sentence: "He is thinking about the volcano",
		trial_code: "tri_volcano",
		status: "critical",
		target_filename: "PICTURE_439.png",
		anchor_tag: "2",
		AIF1_tag: "1_2",
		IF1_tag: "3_2",
		IF3_tag: "3_1",
		IM1_tag: "3_1",
		IM2_tag: "1_1",
		competitor: "cane",
		competitor_filename: "PICTURE_676.png",
		Distractor1: "trophy",
		Distractor1_filename: "PICTURE_71.png",
		Distractor2: "acorn",
		Distractor2_filename: "PICTURE_228.png",
		Distractor3: "square",
		Distractor3_filename: "PICTURE_472.png",
		det: "intDet",
		audio_filename: "AnF/tri_volcano_2_AnF.wav",
		AIF1_audio_filename: "AIF1/tri_volcano_1_AIF1_2_AnF_intDet.wav",
		IF1_audio_filename: "IF1/tri_volcano_3_IF1_2_AnF_intDet.wav",
		IF3_audio_filename: "IF3/tri_volcano_3_IF3_1_AnF_intDet.wav",
		IM1_audio_filename: "IM1/tri_volcano_3_IM1_1_AnF_intDet.wav",
		IM2_audio_filename: "IM2/tri_volcano_1_IM2_1_AnF_intDet.wav"
	}
}