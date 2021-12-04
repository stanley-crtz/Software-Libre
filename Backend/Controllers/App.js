import MembersScheme from "../Models/Members";

const AppController = {

    getUsers: (req, res) => {

        MembersScheme.find((err, members) => {
            if (err) {
                return res.status(400).send({ err });
            }

            return res.status(200).send({ members })
        })

    },
    setMember: ({ body }, res) => {

        const saveMember = new MembersScheme(element);

        saveMember.save(
            (err) => {
                if (err) {
                    return res.status(500).send({ err })
                }

                return res.status(200).send({
                    body
                })
            }
        );

    }

};

export default AppController;
