(function () {


	function Student(name, surname, bd) {

		this.name = name;
		this.surname = surname;
		this.birthYear = bd;
		this.marks = [];
		this.visitingSchedule = [];
		this.marks.length = 10;
		this.visitingSchedule.length = 10;

		this.age = function () {
			return new Date().getFullYear() - this.birthYear
		}

		this.averageMark = function () {
			return this.marks.reduce((acc, item) => (acc += item)) / this.marks.length
		}

		this.present = function () {
			for (let i = 0; i < this.visitingSchedule.length; i++) {
				if (this.visitingSchedule[i] === false || this.visitingSchedule[i]) continue;
				this.visitingSchedule[i] = true;
				break;
			}
		};

		this.absent = function () {
			for (let i = 0; i < this.visitingSchedule.length; i++) {
				if (this.visitingSchedule[i] === false || this.visitingSchedule[i]) continue;
				this.visitingSchedule[i] = false;
				break;
			}
		};

		this.mark = function (mark) {
			if (mark < 1 || mark > 10) throw new Error("Incorrect Mark")
			for (let i = 0; i < this.marks.length; i++) {
				if (this.marks[i]) continue;
				this.marks[i] = mark;
				break;
			}
		};

		this.summary = function () {
			if ((this.marks.reduce((acc, item) => (acc += item)) / this.marks.length) > 9
				&&
				(this.visitingSchedule.reduce((acc, item) => (acc += item)) / this.visitingSchedule.length) > 0.9) {
				return "Красауа! Настоящий джигид!"
			} else {
				return "Ну ты - бестолочь ленивая, ВАХ!"
			}
		};
	};



	let kolya = new Student("Nykola", "Tesla", 1856)
	console.log("==============AGE================");
	console.log(kolya.age());

	kolya.mark(10)
	kolya.mark(10)
	kolya.mark(10)
	kolya.mark(10)
	kolya.mark(10)
	kolya.mark(10)
	kolya.mark(10)
	kolya.mark(10)
	kolya.mark(10)
	kolya.mark(10)
	// kolya.mark(1)
	// kolya.mark(1)
	console.log("=============MARKS===============");
	console.log(kolya.marks);

	kolya.present();
	kolya.present();
	kolya.present();
	kolya.present();
	kolya.present();
	kolya.present();
	kolya.present();
	kolya.present();
	kolya.present();
	kolya.present();
	// kolya.absent();
	// kolya.absent();
	// kolya.absent();

	console.log("=============VISITS==============");
	console.log(kolya.visitingSchedule);

	console.log("=============SUMMARY=============");
	console.log(kolya.summary());

	console.log("===========AVERAGE VISIT===========");
	console.log(kolya.visitingSchedule.reduce((acc, item) => (acc += item)) / kolya.visitingSchedule.length);

	console.log("===========AVERAGE MARK===========");
	console.log(kolya.averageMark());
})()

