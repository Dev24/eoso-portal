#include "Players.hpp"

namespace Oasis {
    using namespace eosio;
    using std::string;

    class Players : public contract {
        using contract::contract;
        
        public:
            Players(account_name self):contract(self) {}

            //@abi action
            void add(const account_name account, string& username, uint64_t level) {
                /**
                 * We require that only the owner of an account can use this action
                 * or somebody with the account authorization
                */
                require_auth(account);

                /**
                 * We access the "player" table as creating an object of type "playerIndex"
                 * As parameters we pass code & scope - _self from the parent contract
                */
                playerIndex players(_self, _self);

                /**
                 * We must verify that the account doesn't exist yet
                 * If the account is not found the iterator variable should be players.end()
                */
                auto iterator = players.find(account);
                eosio_assert(iterator == players.end(), "Address for account already exists");

                /**
                 * We add the new player in the table
                 * The first argument is the payer of the storage which will store the data
                */
                players.emplace(account, [&](auto& player) {
                    player.account_name = account;
                    player.username = username;
                    player.level = 1;
                    player.health_points = 1000;
                    player.energy_points = 1000;
                });
            }

            //@abi action
            void update(const account_name account, uint64_t level, int64_t healthPoints, int64_t energyPoints) {
                require_auth(account);

                playerIndex players(_self, _self);

                auto iterator = players.find(account);
                eosio_assert(iterator != players.end(), "Address for account not found");

                /**
                 * We add the new player in the table
                 * The first argument is the payer of the storage which will store the data
                */
                players.modify(iterator, account, [&](auto& player) {
                    player.level = level;

                    if ((player.health_points - healthPoints) < 0) {
                        player.health_points = 0;
                    } else {
                        player.health_points -= healthPoints;
                    }

                    if ((player.energy_points - energyPoints) < 0) {
                        player.energy_points = 0;
                    } else {
                        player.energy_points -= energyPoints;
                    }
                });
            }

            //@abi action
            void getplayer(const account_name account) {
                playerIndex players(_self, _self);

                auto iterator = players.find(account);
                eosio_assert(iterator != players.end(), "Address for account not found");

                /**
                 * The "get" function returns a constant reference to the object
                 * containing the specified secondary key
                */
                auto currentPlayer = players.get(account);
                print("Username: ", currentPlayer.username.c_str(), " Level: ", currentPlayer.level, 
                " Health: ", currentPlayer.health_points, " Energy: ", currentPlayer.energy_points);
            }

        private:

            //@abi table player i64
            struct player {
                uint64_t account_name;
                string username;
                uint64_t level;
                uint64_t health_points = 1000;
                uint64_t energy_points = 1000;

                uint64_t primary_key() const { return account_name; }

                //the serialize and deserialise methods for contacts to be passed back and forth
                EOSLIB_SERIALIZE(player, (account_name)(username)(level)(health_points)(energy_points))
            };

            typedef multi_index<N(player), player> playerIndex;
    };

    //apply method (TYPE, actions available...)
    EOSIO_ABI(Players, (add)(update)(getplayer))
}