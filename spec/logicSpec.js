var date = new formatDate()

it('Formats todays date').expect(formatDate()).toEqual('2018-11-16')

var y = "I was disappointed that David Edmonds (Driverless Cars still need a moral compass. But what kind?, Opinion, 15 November) failed to credit one of our most brilliant British moral philosophers who developed the “trolley problem” as a way to abstract the reasoning behind ethical decision-making. Philippa Foot is rarely given her due even though these thought experiments are regularly cited in modern philosophy. Her inventiveness has helped inspire the next generation of philosophers to engage with... hjshfjhasjlfhaslhfljashflsahflshflkahfklahhflkah"

it('Summerises long text to 500 characters').expect(sum(y, 1).length).toEqual(503)

it('adds ... to the end of the string').expect(sum(y, 1).slice(500)).toEqual('...')
